"use client";

import Image from "next/image";
import Link from "next/link";
import { TProductProps } from "../../../types";
import Rating from "../Rating";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToWishlist,
  selectWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const FlashSaleItem = ({ product }: TProductProps) => {
  const { _id, name, price, images, features, rating, discount } = product;
  const dispatch = useAppDispatch();

  const wishlist = useAppSelector(selectWishlist);
  const isInWishlist = wishlist.some((item) => item._id === _id);

  return (
    <div key={`flash-item-${_id}`} className="w-full mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <Heart
          className={cn(
            "absolute top-3 right-4 z-50",
            isInWishlist ? "text-red-500 fill-red-500" : "text-black"
          )}
        />
        <div className="relative max-w-full mx-auto w-[300px] h-[400px] sm:w-[300px] sm:h-[320px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[320px] xl:w-[350px] xl:h-[320px]">
          <Image
            src={images[0]}
            alt="Card Image"
            fill
            sizes="(max-width: 640px) 100vw, (max-width:768px) 50vw, (max-width: 1024px) 33vw"
            className="object-cover"
          />

          <div className="bg-yellow-500 w-fit py-1 lg:py-2 rounded-full px-2 lg:px-4 absolute top-4 left-4">
            <p className="text-white font-semibold">{discount || 0} % off</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <h3 className="text-center text-lg font-semibold">
            {name.substring(0, 18)}
          </h3>
          <div className="flex gap-5">
            <span className="flex items-center gap-0.5 relative">
              {price}
              <span className="absolute w-16 h-0.5 bg-gray-700 dark:bg-gray-300"></span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 dark:fill-white"
                viewBox="0 0 384 512"
              >
                <path d="M36 32.3C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8L64 160l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 160c0 53 43 96 96 96l32 0c106 0 192-86 192-192l0-32c0-53-43-96-96-96l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0c17.7 0 32 14.3 32 32l0 32c0 70.7-57.3 128-128 128l-32 0c-17.7 0-32-14.3-32-32l0-160 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-31.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
              </svg>
            </span>
            <span className="flex items-center gap-0.5 relative">
              {price - (price * discount) / 100}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 dark:fill-white"
                viewBox="0 0 384 512"
              >
                <path d="M36 32.3C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8L64 160l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 160c0 53 43 96 96 96l32 0c106 0 192-86 192-192l0-32c0-53-43-96-96-96l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0c17.7 0 32 14.3 32 32l0 32c0 70.7-57.3 128-128 128l-32 0c-17.7 0-32-14.3-32-32l0-160 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-31.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
              </svg>
            </span>
          </div>
          <Rating rating={rating} />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-white text-lg font-semibold mb-2">
            {name.substring(0, 18)}
          </h3>

          {features.slice(0, 4).map((feature) => (
            <p
              key={feature.substring(0, 10)}
              className="text-white text-center"
            >
              {feature}
            </p>
          ))}

          <Link href={`/products/${_id}`}>
            <Button variant="outline" className="mt-4">
              See More
            </Button>
          </Link>

          <div
            className="absolute bottom-12 left-1/2
          -translate-x-1/2 text-white cursor-pointer"
          >
            <Heart
              className={cn(
                "w-10 h-10",
                isInWishlist ? "text-red-500 fill-red-500" : "text-inherit"
              )}
              onClick={() => dispatch(addToWishlist(product))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItem;
