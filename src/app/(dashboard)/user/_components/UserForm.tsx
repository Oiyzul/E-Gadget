"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

type TInputs = {
  name: string;
  email: string;
  password: string;
};

const UserForm = () => {
  const [updateUser] = useUpdateUserMutation();

  const { data: session, update } = useSession();
  if (!session) return null;
  const { name, email } = session.user;
  console.log(name, email);
  const form = useForm<TInputs>({
    defaultValues: {
      name: name,
      email: email,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = form;

  const onSubmit = async (data: TInputs) => {
    const res = await updateUser(data).unwrap();
    if (res.success) {
      const newSession = {
        ...session,
        user: {
          ...session?.user,
          name: data.name,
          email: data.email,
        },
      };

      await update(newSession);
    } else {
      console.error("Failed to update user", res?.message);
    }
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <CardHeader className="text-2xl font-semibold">Profile</CardHeader>
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
              placeholder="Update your password"
              required={false}
            />
            {/* <FormInput
              control={control}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter your password again"
            /> */}
            <Button
              className="bg-sky-500 w-full hover:bg-sky-600 my-5"
              disabled={isSubmitting}
            >
              Update
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
