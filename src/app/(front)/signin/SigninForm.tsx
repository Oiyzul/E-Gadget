"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type TInputs = {
  email: string;
  password: string;
};

const SigninForm = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const params = useSearchParams();
  let callbackUrl = params.get("callbackUrl") || "/";
  console.log(callbackUrl);

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const form = useForm<TInputs>({
    defaultValues: {
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
      signIn("credentials", {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card className="p-8 min-w-sm">
      <CardHeader>
        <h1 className="text-2xl font-semibold mb-5">Sign in</h1>
        {params.get("error") && (
          <div className="text-red-500">
            {params.get("error") === "CredentialsSignin"
              ? "Invalid email or password"
              : params.get("error")}
          </div>
        )}
        {params.get("success") && (
          <div className="text-green-500">{params.get("success")}</div>
        )}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              {isSubmitting ? <span>Loading</span> : "Sign in"}
            </Button>
          </form>
        </Form>

        <div>
          Need an account?{" "}
          <Link
            className="text-sky-500 font-semibold"
            href={`/register?callbackUrl=${callbackUrl}`}
          >
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default SigninForm;
