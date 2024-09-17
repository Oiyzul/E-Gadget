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
import {
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/features/order/orderApi";
import { TOrder } from "../../../../types";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const OrdersTable = () => {
  const [updateOrder] = useUpdateOrderMutation();
  const { data: { data: orders } = [], isLoading } = useGetAllOrdersQuery({});

  const updateDeliveryStatus = async (id: string, status: boolean) => {
    await updateOrder({
      id: id,
      data: { isDelivered: status },
    }).unwrap();
  };

  if (isLoading) return <div>Loading...</div>;
  console.log(orders);
  return (
    <MaxWidthWrapper>
      <h1 className="text-2xl font-semibold mb-5">All Orders</h1>
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
            <TableHead>Payment</TableHead>
            <TableHead>Status</TableHead>
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
                <TableCell>{order.isPaid ? "Paid" : "Not paid"}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Switch
                    id="isDeliverd"
                    checked={order.isDelivered}
                    onCheckedChange={() =>
                      updateDeliveryStatus(order._id, !order.isDelivered)
                    }
                  />
                  <Label htmlFor="isDeliverd">
                    {order.isDelivered ? "Delivered" : "Pending"}
                  </Label>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>{orders?.length}</TableCell>
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
