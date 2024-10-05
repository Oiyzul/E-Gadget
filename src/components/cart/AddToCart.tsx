"use client";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCart,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { TCartItem, TProduct } from "../../../types";

interface AddToCartProps {
  product: TProduct;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { items } = useAppSelector(selectCart);
  const existedItem = items.find((item: TCartItem) => item.id === product._id);

  const newItem = {
    id: product._id as string,
    name: product.name,
    price: product.price,
    image: product.images[0],
    // color: product?.colors[0],
    variant: product.variant,
    discount: product?.discount,
  } as TCartItem;

  const handleAddToCart = () => {
    dispatch(addToCart(newItem));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id: product._id as string }));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id: product._id as string }));
  };

  return existedItem ? (
    <div className="border-2 border-gray-950 dark:border-white rounded-full w-28 flex justify-between px-2 py-1">
      <button className="" onClick={handleDecreaseQuantity}>
        <Minus />
      </button>
      <span className="font-bold">{existedItem.qty}</span>
      <button onClick={handleIncreaseQuantity}>
        <Plus />
      </button>
    </div>
  ) : (
    <button
      className="bg-gray-950 dark:bg-white px-4 py-2 rounded-[10px] text-white dark:text-gray-950 shadow-xl"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
