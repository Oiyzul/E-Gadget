'use client'

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCart,
  TCartItem,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch, useSelector } from "react-redux";
import { TProduct } from "../../types";

interface AddToCartProps {
  product: TProduct;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useAppSelector(selectCart);
  const cartItem = cart.find((item: TCartItem) => item._id === product._id);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ _id: product._id }));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ _id: product._id }));
  };

  return (
    <div>
      {cartItem ? (
        <div>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default AddToCart;
