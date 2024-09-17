import { useUpdateProductMutation } from "@/redux/features/product/productApi";
import { TProduct } from "../../../../types";
import ProductForm from "./ProductForm";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  data: TProduct;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const EditProductModal = ({ data, setOpen }: TProps) => {
  const {
    _id,
    name,
    brand,
    model,
    description,
    price,
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
    defaultValues: {
      name: name || "",
      images: images || [],
      category: category || "",
      description: description || "",
      brand: brand || "",
      model: model || "",
      colors: colors || [],
      price: price || 0,
      discount: discount || 0,
      isFeatured: isFeatured || false,
      isFlashSale: isFlashSale || false,
      variant: variant || "",
      countInStock: countInStock || 0,
    },
  });

  const onSubmit = async (data: TProduct) => {
    const product = {
      id: _id,
      data: data,
    };
    const res = await updateProduct(product).unwrap();
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
