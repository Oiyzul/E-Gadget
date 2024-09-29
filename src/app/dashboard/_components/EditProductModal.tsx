import { useUpdateProductMutation } from "@/redux/features/product/productApi";
import { TProduct } from "../../../../types";
import ProductForm from "./ProductForm";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TProps = {
  data: TProduct;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const prouductUpdateValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }).optional(),
  brand: z.string().min(2, { message: "Brand is required" }).optional(),
  model: z.string().min(2, { message: "Model is required" }).optional(),
  category: z.string().min(2, { message: "Category is required" }).optional(),
  price: z.coerce
    .number()
    .nonnegative({ message: "Price must be a positive number" })
    .refine((val) => val !== undefined, { message: "Price is required" })
    .optional(),
  description: z
    .string()
    .min(2, { message: "Description is required" })
    .optional(),
  features: z
    .array(z.string())
    .min(1, { message: "Features are required" })
    .optional(),
  images: z
    .array(z.string())
    .min(1, { message: "Images are required" })
    .optional(),
  colors: z
    .array(z.string())
    .min(1, { message: "Colors are required" })
    .optional(),
  rating: z.number().optional(),
  numReviews: z.number().optional(),
  countInStock: z.coerce
    .number()
    .nonnegative({ message: "Count in stock must be a positive number" })
    .refine((val) => val !== undefined, {
      message: "Count in stock is required",
    })
    .optional(),
  variant: z.string().optional(),
  isFlashSale: z.coerce.boolean().default(false).optional(),
  isFeatured: z.coerce.boolean().default(false).optional(),
  discount: z.coerce.number().default(0).optional(),
});

const EditProductModal = ({ data, setOpen }: TProps) => {
  const {
    _id,
    name,
    brand,
    model,
    description,
    price,
    features,
    images,
    variant,
    colors,
    category,
    countInStock,
    isFeatured,
    isFlashSale,
    discount,
  } = data;
  const [updateProduct] = useUpdateProductMutation();
  const form = useForm<TProduct>({
    resolver: zodResolver(prouductUpdateValidationSchema),
    defaultValues: {
      name: name || "",
      images: images || [],
      category: category || "",
      description: description || "",
      brand: brand || "",
      model: model || "",
      colors: colors || [],
      price: price || 0,
      features: features || [],
      discount: discount || 0,
      isFeatured: isFeatured || false,
      isFlashSale: isFlashSale || false,
      variant: variant || "",
      countInStock: countInStock || 0,
    },
  });
  const {
    formState: { errors },
  } = form;

  console.log(errors);

  const onSubmit = async (data: TProduct) => {
    const product = {
      id: _id,
      data: data,
    };
    console.log(product);
    const res = await updateProduct(product).unwrap();
    console.log(res);
    if (res.success) {
      setOpen(false);
    }
  };
  return (
    <div>
      <ProductForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default EditProductModal;
