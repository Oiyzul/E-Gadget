"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TInputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const [error, setError] = useState("");
  const { data: session } = useSession();

  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

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
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<TInputs> = async (data: TInputs) => {
    setError("");
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
          `/login?callbackUrl=${callbackUrl}&success=Account has been created successfully.`
        );
      } else {
        const data = await res.json();

        throw new Error(data.message);
      }
    } catch (err: any) {
      const error =
        err.message && err.message.indexOf("E11000") === 0
          ? "Email already exists."
          : err.message;
      setError(error);
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
            {error && <p className="my-2 text-red-500">{error}</p>}
          </form>
        </Form>

        <div>
          Already have an account?
          <Link
            className="text-sky-500 font-semibold"
            href={`/login?callbackUrl=${callbackUrl}`}
          >
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default RegisterForm;
