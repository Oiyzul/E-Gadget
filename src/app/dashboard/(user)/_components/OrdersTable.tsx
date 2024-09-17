"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOrdersByUserIdQuery } from "@/redux/features/order/orderApi";
import { useSession } from "next-auth/react";
import { TOrder } from "../../../../../types";

const OrdersTable = () => {
  const { data } = useSession();

  const { data: { data: orders } = [], isLoading } = useGetOrdersByUserIdQuery(
    data?.user._id as string || ""
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <MaxWidthWrapper>
      <h1 className="text-2xl font-semibold mb-5">Your Orders</h1>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">OrderId</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>SubTotal</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Delivery</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders &&
            orders.map((order: TOrder) => (
              <TableRow key={order._id}>
                <TableCell className="font-medium">{order._id}</TableCell>
                <TableCell>
                  <img
                    src={order.items[0].image}
                    alt={order.items[0].name}
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell>
                  {order.items.reduce((a, c) => a + c.qty, 0)}
                </TableCell>
                <TableCell>
                  {order.items.reduce((a, c) => a + c.price * c.qty, 0)}
                </TableCell>
                <TableCell>{order.taxPrice}</TableCell>
                <TableCell>{order.shippingPrice}</TableCell>
                <TableCell>{order.totalPrice}</TableCell>
                <TableCell>
                  {order.isDelivered ? "Delivered" : "Not delivered"}
                </TableCell>
                <TableCell>{order.isPaid ? "Paid" : "Not paid"}</TableCell>
                <TableCell>{order.isPaid ? "Thank you" : "Cancel"}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>{orders?.length}</TableCell>
            <TableCell className="text-right">
              Out of {orders?.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </MaxWidthWrapper>
  );
};

export default OrdersTable;
