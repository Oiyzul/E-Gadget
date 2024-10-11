"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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

const demoUser = {
  email: "user@gmail.com",
  password: "123456",
};
const demoAdmin = {
  email: "admin@gmail.com",
  password: "123456",
};

const SigninForm = () => {
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
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
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
    <Card className="relative z-50 p-8 bg-transparent dark:bg-transparent min-w-[400px] text-white">
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
      <CardContent className="w-full bg-transparent">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b-gray-500"
            />
            <FormInput
              control={control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="bg-transparent border-b-gray-500"
            />
            <Button
              variant="outline"
              className="bg-transparent border-white hover:border-gray-500  w-full my-5 text-white"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </form>
        </Form>

        <div>
          <Button
            variant="outline"
            className="w-full flex items-center gap-3 text-black dark:text-white"
            onClick={() => signIn("google")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-4 h-4 mt-0.5"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Sign in with google
          </Button>
        </div>

        <div className="mt-3">
          Need an account?{" "}
          <Link
            className="underline font-semibold"
            href={`/register?callbackUrl=${callbackUrl}`}
          >
            Register
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full text-black dark:text-white">
          <Button
            variant="outline"
            onClick={() => signIn("credentials", demoUser)}
          >
            Demo User
          </Button>
          <Button
            variant="outline"
            onClick={() => signIn("credentials", demoAdmin)}
          >
            Demo Admin
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default SigninForm;
