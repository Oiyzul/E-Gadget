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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

const OrdersTable = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false)

  const { data } = useSession();
  const [addReview] = useAddReviewMutation();

  const { data: { data: orders } = [], isLoading } = useGetOrdersByUserIdQuery(
    data?.user._id as string
  );

  console.log(orders, data?.user._id);

  const handleAddReview = async (productId: string) => {
    const reviewData = {
      customer: data?.user._id,
      customerName: data?.user?.name,
      product: productId,
      rating: rating,
      feedback: feedback,
    };
    console.log(reviewData);
    const res = await addReview(reviewData).unwrap();
    console.log(res);
    if (res.success) {
      toast({
        title: "Review added successfully!",
        description: "Your review has been submitted.",
      })
      setFeedback("");
      setRating(0);
      setOpen(false);
    }
  };

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
                <TableCell>
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">Add Review</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <AlertDialogHeader>
                        <DialogTitle>Add Review</DialogTitle>
                      </AlertDialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="">
                          <textarea
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Leave your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                          />
                        </div>
                        <div className="">
                          <div className="flex mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`cursor-pointer text-2xl ${
                                  rating >= star
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                                onClick={() => setRating(star)}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={() =>
                            handleAddReview(order?.items[0]?.product as string)
                          }
                        >
                          Add
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
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
