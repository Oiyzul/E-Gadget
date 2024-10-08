import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import Order from "@/lib/models/orderModel";
import { NextResponse } from "next/server";

export const GET = auth(async (req: any) => {
  if (!req.auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { user } = req.auth;
  await dbConnect();

  const orders = await Order.find({ customer: user._id });
  
  return NextResponse.json(
    { success: true, message: "Orders retrieved successfully.", data: orders },
    { status: 200 }
  );
});
