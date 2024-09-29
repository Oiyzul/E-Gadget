"use client";

import { useForm } from "react-hook-form";
import { TProduct } from "../../../../../../types";
import ProductForm from "@/app/dashboard/_components/ProductForm";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const prouductValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  brand: z.string().min(2, { message: "Brand is required" }),
  model: z.string().min(2, { message: "Model is required" }),
  category: z.string().min(2, { message: "Category is required" }),
  price: z.coerce
    .number()
    .nonnegative({ message: "Price must be a positive number" })
    .refine((val) => val !== undefined, { message: "Price is required" }),
  description: z.string().min(2, { message: "Description is required" }),
  features: z.array(z.string()).min(1, { message: "Features are required" }),
  images: z.array(z.string()).min(1, { message: "Images are required" }),
  colors: z.array(z.string()).min(1, { message: "Colors are required" }),
  rating: z.number().optional(),
  numReviews: z.number().optional(),
  countInStock: z.coerce
    .number()
    .nonnegative({ message: "Count in stock must be a positive number" })
    .refine((val) => val !== undefined, {
      message: "Count in stock is required",
    }),
  variant: z.string().optional(),
  isFlashSale: z.coerce.boolean().default(false),
  isFeatured: z.coerce.boolean().default(false),
  discount: z.coerce.number().default(0),
});

const AddProductForm = () => {
  const router = useRouter();
  const [addProduct] = useAddProductMutation();
  const form = useForm<TProduct>({
    resolver: zodResolver(prouductValidationSchema),
  });
 
  const {formState: {errors}} = form
  console.log(errors)
  async function onSubmit(data: TProduct) {
    console.log(data);
    const res = await addProduct(data).unwrap();
    console.log(res);
    if (res.success) {
      form.reset();
      router.push("/dashboard/products");
    }
  }
  //   const onError = (err: any) => {
  //     console.log("Error", err);
  //     setIsUploading(false);
  //   };

  //   const onUploadStart = () => {
  //     setIsUploading(true);
  //   };

  //   const onSuccess = (res: any) => {
  //     // console.log("Success", res);

  //     setThumbnailUrl(res.thumbnailUrl);
  //     form.setValue("imgUrl", res.url);
  //     setIsUploading(false);
  //   };

  //   const onUploadProgress = (progress: any) => {
  //     console.log("Upload-progress", progress);
  //   };

  //   // console.log(form.getValues());
  //   console.log(isUploading)
  return (
    <div>
      <ProductForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default AddProductForm;
