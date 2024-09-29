import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();

  const products = await Product.find({});

  return NextResponse.json(
    {
      success: true,
      message: "Products retrieved successfully.",
      data: products,
    },
    { status: 200 }
  );
};

export const POST = async (request: NextRequest) => {
  await dbConnect();
  try {
    const payload = await request.json();
    console.log(payload);
    const newProduct = await Product.create(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully.",
        data: newProduct,
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message || "Failed to create product",
    });
  }
};

export const PUT = async (request: NextRequest) => {
  const payload = await request.json();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  console.log(payload, id);
  await dbConnect();

  const updatedProduct = await Product.findByIdAndUpdate(id, payload.data, {
    new: true,
  });

  return NextResponse.json(
    {
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    },
    { status: 200 }
  );
};

export const DELETE = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  console.log(id);
  await dbConnect();

  await Product.findByIdAndDelete(id);

  return NextResponse.json(
    {
      success: true,
      message: "Product deleted successfully.",
    },
    { status: 200 }
  );
};
