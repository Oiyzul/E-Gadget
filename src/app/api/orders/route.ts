import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/productModel";
import { round2 } from "@/lib/utils";
import { TOrderItem } from "../../../../types";
import Order from "@/lib/models/orderModel";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const POST = auth(async (req: any) => {
  if (!req.auth) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { user } = req.auth;
  try {
    const payload = await req.json();

    await dbConnect();
    const dbProductPrices = await Product.find(
      {
        _id: {
          $in: payload.items.map((x: { id: string }) => x.id),
        },
      },
      "price"
    );

    const dbOrderItems = payload.items.map((x: { id: string }) => {
      //@ts-ignore
      const { id, ...rest } = x;
      console.log(id);
      return {
        ...rest,
        product: x.id,
        price: dbProductPrices.find(
          (y: { _id: string }) => y._id.toString() === x.id
        )?.price,
      };
    });

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
      calcPrices(dbOrderItems);

    const newOrder = await Order.create({
      items: dbOrderItems,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paymentMethod: payload.paymentMethod,
      shippingAddress: payload.shippingAddress,
      customer: user._id,
    });

    return Response.json(
      {
        success: true,
        message: "Order created successfully",
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.log(err);
    return Response.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
});

const calcPrices = (orderItems: TOrderItem[]) => {
  // Calculate the items price
  const itemsPrice = round2(
    orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate the shipping price
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  // Calculate the tax price
  const taxPrice = round2(Number((0.15 * itemsPrice).toFixed(2)));
  // Calculate the total price
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export const GET = async () => {
  await dbConnect();

  const orders = await Order.find();

  return NextResponse.json(
    {
      success: true,
      message: "Orders retrieved successfully.",
      data: orders,
    },
    { status: 200 }
  );
};

export const PUT = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const payload = await request.json();

  await dbConnect();

  const order = await Order.findByIdAndUpdate(id, payload);
  return NextResponse.json(
    {
      success: true,
      message: "Order updated successfully.",
      data: order,
    },
    { status: 200 }
  );
};
