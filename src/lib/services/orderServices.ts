import { cache } from "react";
import dbConnect from "../dbConnect";
import Order from "../models/orderModel";
import { TOrder } from "../../../types";

const getOrderById = cache(async (id: string) => {
  await dbConnect();
  const order = await Order.findById(id).lean();
  return order as TOrder;
});

const OrderServices = {
  getOrderById
};

export default OrderServices;
