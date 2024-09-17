import OrderServices from "@/lib/services/orderServices";
import OrderDetails from "./OrderDetails";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const OrdersPage = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  if (!session || !session.user._id) {
    return redirect("/unauthorized");
  }

  const order = await OrderServices.getOrderById(params.id);
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <OrderDetails order={order} />
      </MaxWidthWrapper>
      {/* <h1>Order Details</h1>
    <p>Order ID: {order._id}</p>
    <p>Total Amount: ${order.totalPrice}</p>
    <p>Order Date: {new Date(order.createdAt).toLocaleString()}</p>
    <h2>Items</h2>
    <ul>
      {order.items.map((item) => (
        <li key={item.product}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.qty}</p>
          <p>Price: ${item.price}</p>
        </li>
      ))}
    </ul> */}
      {/* <p>Shipping Address: {order.shippingAddress}</p> */}
      {/* <p>Status: {order.isPaid}</p> */}
      {/* <button>Cancel Order</button> */}
      {/* <button onClick={()=> OrderServices.cancelOrder(order._id)}>Cancel Order</button> */}
    </section>
  );
};

export default OrdersPage;
