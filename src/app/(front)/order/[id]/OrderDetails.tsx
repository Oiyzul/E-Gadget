"use client";

import Link from "next/link";
import { TOrder, TOrderItem } from "../../../../../types";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePayMutation } from "@/redux/features/payment/paymentApi";

const OrderDetails = ({ order }: { order: TOrder }) => {
  const {
    _id,
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice,
    isDelivered,
    isPaid,
    items,
    itemsPrice,
    deliveredAt,
    paidAt,
    paymentMethod,
  } = order;

  const router = useRouter();
  const [pay] = usePayMutation();

  const totalQuantity = items.reduce((a, c) => a + c.qty, 0);

  const handlePayOrder = async () => {
    const paymentData = {
      order: _id,
      shippingAddress,
      totalQuantity,
      totalPrice,
    };

    if (!paymentData) return;
    const res = await pay(paymentData).unwrap();
    if (res.success) {
      router.push(res.payment_url);
    }
    console.log(res);
  };
  return (
    <div>
      <h1 className="text-2xl py-4">Order-{_id}</h1>
      <div className="grid md:grid-cols-4 gap-5 my-4">
        <div className="md:col-span-3 flex flex-col space-y-5">
          <div className="">
            <Card className="">
              <CardHeader>
                <h2 className="text-xl font-semibold">Shipping Address</h2>
              </CardHeader>
              <CardContent>
                <p>{shippingAddress.customerName}</p>
                <p>{shippingAddress.phone}</p>
                <p>
                  {shippingAddress.address}, {shippingAddress.city},{" "}
                  {shippingAddress.postalCode}, {shippingAddress.country}.
                </p>
                {isDelivered ? (
                  <div className="text-green-500 font-semibold">
                    Delivered at {deliveredAt}
                  </div>
                ) : (
                  <div className="text-red-500 font-semibold">
                    Not Delivered
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="">
              <CardHeader>
                <h2 className="text-xl font-semibold">Payment Status</h2>
              </CardHeader>
              <CardContent>
                <p>{paymentMethod}</p>
                {/* {paymentResult && (
                  <div className="text-green-500 font-semibold">
                    {paymentResult.status} - {paymentResult.id} -{" "}
                    {paymentResult.email_address}
                  </div>
                )} */}
                {isPaid ? (
                  <div className="text-green-500 font-semibold">
                    Paid at {paidAt}
                  </div>
                ) : (
                  <div className="text-red-500 font-semibold">Not Paid</div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="">
              <CardHeader>
                <h2 className="text-xl font-semibold">Items</h2>
              </CardHeader>
              <CardContent>
                <table className="">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item: TOrderItem) => (
                      <tr key={item.product}>
                        <td>
                          <Link
                            href={`/product/${item.product}`}
                            className="flex items-center"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
                            <span className="px-2">
                              {item.name} ({item.color} {item.variant})
                            </span>
                          </Link>
                        </td>
                        <td>{item.qty}</td>
                        <td>${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card className="">
            <CardHeader>
              <h2 className="text-xl font-semibold">Order Summary</h2>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div className="">Quantity</div>
                    <div className="font-semibold">{totalQuantity}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Price</div>
                    <div className="font-semibold">{itemsPrice} BDT</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div className="font-semibold">{taxPrice} BDT</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div className="font-semibold">{shippingPrice} BDT</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div className="font-semibold">{totalPrice} BDT</div>
                  </div>
                </li>

                {!isPaid && (
                  <li>
                    <Button
                      className="w-full bg-sky-500 hover:bg-sky-600"
                      onClick={handlePayOrder}
                    >
                      Pay Now
                    </Button>
                  </li>
                )}
                {/* {session?.user.isAdmin && (
                  <li>
                    <button
                      className="btn w-full my-2"
                      onClick={() => deliverOrder()}
                      disabled={isDelivering}
                    >
                      {isDelivering && (
                        <span className="loading loading-spinner"></span>
                      )}
                      Mark as delivered
                    </button>
                  </li>
                )} */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
