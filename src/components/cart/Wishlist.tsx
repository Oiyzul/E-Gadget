"use client";

import {
  addToWishlist,
  clearWishlist,
  selectWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import { TCartItem, TProduct } from "../../../types";
import { CircleX, ShoppingBag } from "lucide-react";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { Button } from "../ui/button";

const itemsAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: -20 },
};

const itemAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Wishlist = () => {
  const wishlist = useAppSelector(selectWishlist);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: TProduct) => {
    const newItem = {
      id: product._id as string,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: product?.colors[0],
      variant: product.variant,
      discount: product?.discount,
    } as TCartItem;

    dispatch(addToCart(newItem));
    dispatch(addToWishlist(product));
  };

  return (
    <div className="">
      <motion.div
        variants={itemsAnimation}
        initial="initial"
        animate="animate"
        exit="initial"
        className="h-[calc(100vh-50px)] w-[350px] bg-white dark:bg-black p-4 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your list is empty.</p>
        ) : (
          <div className="flex flex-col justify-between h-full pb-10">
            <div className="flex flex-col gap-4">
              {wishlist.map((item: TProduct) => (
                <motion.div
                  key={item._id}
                  className="bg-gray-100 px-4 py-2 rounded-xl"
                  variants={itemAnimation}
                >
                  <div className="flex items-center justify-between dark:text-black mb-1">
                    <h3 className="font-semibold">
                      {item.name.substring(0, 20)}
                    </h3>
                    <button
                      onClick={() => dispatch(addToWishlist(item))}
                      className=" text-red-500 rounded"
                    >
                      <CircleX />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <img src={item.images[0]} alt="" className="w-12 h-10" />
                    <p className="dark:text-black flex items-center gap-1">
                      {item.price}{" "}
                      <svg
                        className="w-3 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M36 32.3C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8L64 160l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 160c0 53 43 96 96 96l32 0c106 0 192-86 192-192l0-32c0-53-43-96-96-96l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0c17.7 0 32 14.3 32 32l0 32c0 70.7-57.3 128-128 128l-32 0c-17.7 0-32-14.3-32-32l0-160 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-31.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
                      </svg>
                    </p>
                    <ShoppingBag
                      className="cursor-pointer"
                      onClick={() => handleAddToCart(item)}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => dispatch(clearWishlist())}
              >
                Clear All
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Wishlist;
