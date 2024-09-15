"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type TInputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const params = useSearchParams();
  let callbackUrl = params.get("callbackUrl") || "/";

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const form = useForm<TInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = form;

  const onSubmit = async (data: TInputs) => {
    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        return router.push(
          `/signin?callbackUrl=${callbackUrl}&success=Account has been created successfully.`
        );
      } else {
        const data = await res.json();
        console.log(data);
        throw new Error(data.message);
      }
    } catch (err: any) {
      console.error(err);
      const error =
        err.message && err.message.indexOf("E11000") === 0
          ? "Email already exists."
          : err.message;
    }
  };
  return (
    <Card className="p-8 min-w-sm">
      <CardHeader>
        <h1 className="text-2xl font-semibold mb-5">Sign up</h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your name"
            />
            <FormInput
              control={control}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />

            <FormInput
              control={control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Button className="bg-sky-500 w-full hover:bg-sky-600 my-5">
              {isSubmitting ? <span>Loading</span> : "Signup"}
            </Button>
          </form>
        </Form>

        <div>
          Already have an account?
          <Link
            className="text-sky-500 font-semibold"
            href={`/signin?callbackUrl=${callbackUrl}`}
          >
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default RegisterForm;
