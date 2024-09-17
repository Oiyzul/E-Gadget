"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { saveShippingAddress } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { TShippingAddress } from "../../../../types";

const CheckoutForm = ({ emptyValue }: { emptyValue: boolean }) => {
  const dispath = useAppDispatch();

  const form = useForm<TShippingAddress>({
    defaultValues: {
      customerName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      city: "",
      country: "",
    },
  });

  const onSubmit = async (data: TShippingAddress) => {
    dispath(saveShippingAddress(data));
  };
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <h3 className="text-2xl font-semibold mb-5">
          Your shipping Information
        </h3>
        <FormInput
          control={form.control}
          name={"customerName"}
          placeholder={"Full Name"}
        />
        <FormInput
          control={form.control}
          name={"email"}
          placeholder={"Email Address"}
        />
        <FormInput
          control={form.control}
          name={"phone"}
          placeholder={"Phone Number"}
        />
        <FormInput
          control={form.control}
          name={"address"}
          placeholder={"Address"}
        />
        <FormInput control={form.control} name={"city"} placeholder={"City"} />

        <FormInput
          control={form.control}
          name={"postalCode"}
          placeholder={"Postal Code"}
        />

        <FormInput
          control={form.control}
          name={"country"}
          placeholder={"Country"}
        />

        <div className="mt-8">
          <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
            {emptyValue ? "Save & Continue" : "Update"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
