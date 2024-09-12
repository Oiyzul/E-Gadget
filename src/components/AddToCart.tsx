"use client";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCart,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { TOrderItem, TProduct } from "../../types";
import { Minus, Plus } from "lucide-react";

interface AddToCartProps {
  product: TProduct;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useAppSelector(selectCart);
  const existedItem = cart.find(
    (item: TOrderItem) => item.productId === product._id
  );

  const newItem = {
    productId: product._id,
    name: product.title,
    price: product.price,
    qty: 1,
    image: product.images[0],
    // color: product?.colors[0],
    variant: product.variants,
    // discount: product?.discount,
  };

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
    <div className="border-2 rounded-full w-28 flex justify-between px-2 py-1">
      <button className="" onClick={handleDecreaseQuantity}>
        <Minus />
      </button>
      <span className="font-bold">{existedItem.qty}</span>
      <button onClick={handleIncreaseQuantity}>
        <Plus />
      </button>
    </div>
  ) : (
    <button className="bg-green-500 px-4 py-2 rounded-full text-white" onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCart;
