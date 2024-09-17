"use client";

import { useForm } from "react-hook-form";
import { TProduct } from "../../../../../../types";
import ProductForm from "@/app/dashboard/_components/ProductForm";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const router = useRouter();
  const [addProduct] = useAddProductMutation();
  const form = useForm<TProduct>({
    defaultValues: {},
  });

  async function onSubmit(data: TProduct) {
    const res = await addProduct(data).unwrap();
    console.log(res.success);
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
