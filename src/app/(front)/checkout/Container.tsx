"use client";

import { CartDetails } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CheckoutForm from "./CheckoutForm";
import { useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/features/cart/cartSlice";
import { hasEmptyValue } from "@/lib/utils";

const Container = () => {
  const { shippingAddress } = useAppSelector(selectCart);
  
  const emptyValue = (hasEmptyValue(shippingAddress));
  return (
    <section className="h-screen">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          <div className="col-span-2 md:order-2">
            <CartDetails emptyValue={emptyValue} />;
          </div>
          <div className="col-span-1">
            <CheckoutForm emptyValue={emptyValue} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Container;
