import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/productModel";
import { round2 } from "@/lib/utils";
import { TOrderItem } from "../../../../types";

export const POST = async (req: any) => {
  try {
    const payload = await req.json();
    await dbConnect();
    const dbProductPrices = await Product.find(
      {
        _id: {
          $in: payload.items.map((x: { _id: string }) => x._id),
        },
      },
      "price"
    );

    const dbOrderItems = payload.items.map((x: { _id: string }) => ({
      ...x,
      productId: x._id,
      price: dbProductPrices.find((y: { _id: string }) => y._id === x._id)
        ?.price,
    }));

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
      calcPrices(dbOrderItems);

    // const newOrder = Order.create({
    //   items: dbOrderItems,
    //   itemsPrice,
    //   taxPrice,
    //   shippingPrice,
    //   totalPrice,
    //   paymentMethod: payload.paymentMethod,
    //   shippingAddress: payload.shippingAddress,
    //   // customerId: user._id
    // });

    return Response.json(
      {
        success: true,
        message: "Order created successfully",
        // order: newOrder,
      },
      { status: 200 }
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
};

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
