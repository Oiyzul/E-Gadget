"use client";

import { CartDetails } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CheckoutForm from "./CheckoutForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart, selectCart } from "@/redux/features/cart/cartSlice";
import { hasEmptyValue } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { usePlaceOrderMutation } from "@/redux/features/order/orderApi";

const Container = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const [placeOrder] = usePlaceOrderMutation();
  const { items, shippingAddress } = useAppSelector(selectCart);

  const emptyValue = hasEmptyValue(shippingAddress);
  const handlePlaceOrder = async () => {
    if (emptyValue) return;

    const newOrder = {
      items,
      shippingAddress,
    };
    const res = await placeOrder(newOrder).unwrap();
    
    if (res.success) {
      dispatch(clearCart());
      router.push(`/order/${res.order._id}`);
    }
  };

  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-5 xl:gap-20">
          <div className="md:col-span-2 xl:order-2">
            <CartDetails
              emptyValue={emptyValue}
              handlePlaceOrder={handlePlaceOrder}
            />
            ;
          </div>
          <div className="">
            <CheckoutForm emptyValue={emptyValue} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Container;
