"use client";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import { CircleX, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const animation = {
  initial: { opacity: 0, x: 300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const CartModal = ({ open, setOpen }: TProps) => {
  const { items, totalQuantity, totalPrice } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate={open ? "animate" : ""}
      exit="initial"
      className="absolute top-12 right-0 h-[calc(100vh-50px)] w-[300px] bg-white dark:bg-black p-4 z-10 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col justify-between h-full pb-10">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="bg-gray-100 px-4 py-2 rounded-xl"
              >
                <div className="flex items-center justify-between dark:text-black mb-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className=" text-red-500 rounded"
                  >
                    <CircleX />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <img src={item.image} alt="" className="w-20 h-16" />
                  <div className="border flex items-center rounded dark:border-white">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity({ id: item.id }))
                      }
                      className="px-1 py-1 bg-gray-200 dark:bg-white rounded dark:text-black"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="mx-2 dark:text-black font-semibold">
                      {item.qty}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(increaseQuantity({ id: item.id }))
                      }
                      className="px-2 py-1 bg-gray-200 dark:bg-white rounded dark:text-black"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <p className="dark:text-black flex items-center gap-1">
                    {item.price * item.qty}{" "}
                    <svg
                      className="w-3 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M36 32.3C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8L64 160l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 160c0 53 43 96 96 96l32 0c106 0 192-86 192-192l0-32c0-53-43-96-96-96l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0c17.7 0 32 14.3 32 32l0 32c0 70.7-57.3 128-128 128l-32 0c-17.7 0-32-14.3-32-32l0-160 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-31.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
                    </svg>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total Quantity: {totalQuantity}
            </p>
            <p className="text-lg font-semibold mb-4">
              Total Price: {totalPrice} BDT
            </p>

            <Button asChild className="mr-2" onClick={() => setOpen(false)}>
              <Link href={"/checkout"}>Checkout</Link>
            </Button>
            <Button asChild variant={"outline"} onClick={() => setOpen(false)}>
              <Link href={"/products"}>Shop More</Link>
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CartModal;
