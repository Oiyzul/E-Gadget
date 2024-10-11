"use client";

import { FormInput, UploadImage } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

type TInputs = {
  name: string;
  email: string;
  password: string;
  image?: string;
};

const UserForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnailUrls, setThumbnailUrls] = useState("");
  const ikUploadRef = useRef<HTMLInputElement>(null);
  const [updateUser] = useUpdateUserMutation();

  const { data: session, update } = useSession();

  const form = useForm<TInputs>({
    defaultValues: {
      name: session?.user?.name as string,
      email: session?.user?.email as string,
    },
  });

  const onSuccess = (res: any) => {
    form.setValue("image", res.url);
    setIsUploading(false);
    setThumbnailUrls(res.thumbnailUrl);
    console.log(res.url);
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
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
    <Card className="mx-auto relative mt-20">
      <CardHeader className="text-2xl font-semibold mt-20">
        Update Profile
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
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 size-48 bg-gray-100 rounded-full flex flex-col items-end justify-end">
              <div className="relative">
                {thumbnailUrls && (
                  <div key={thumbnailUrls.substring(0, 10)}>
                    <Image
                      src={thumbnailUrls}
                      width={192}
                      height={192}
                      alt="Preview"
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 flex-wrap">
                    <FormLabel className="sr-only">Image</FormLabel>

                    <FormControl {...field}>
                      <div className="flex gap-1">
                        <UploadImage
                          isUploading={isUploading}
                          setIsUploading={setIsUploading}
                          onSuccess={onSuccess}
                          ref={ikUploadRef}
                        />
                        <Button
                          type="button"
                          variant={"outline"}
                          size={"sm"}
                          className="text-blue-500 absolute bottom-0 right-0"
                          onClick={() => ikUploadRef.current?.click()}
                        >
                          {isUploading ? "Uploading..." : "Upload"}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="bg-sky-500 w-full hover:bg-sky-600 my-5"
              disabled={isSubmitting || isUploading}
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
