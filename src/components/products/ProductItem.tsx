"use client";

import Image from "next/image";
import { TProduct } from "../../../types";
import Link from "next/link";
import Rating from "../Rating";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToWishlist,
  selectWishlist,
} from "@/redux/features/wishlist/wishlistSlice";

const ProductItem = ({ product }: { product: TProduct }) => {
  const { _id, name, images, model, features, price, rating, discount } =
    product;

  const dispatch = useAppDispatch();

  const wishlist = useAppSelector(selectWishlist);
  const isInWishlist = wishlist.some((item) => item._id === _id);

  return (
    <div
      key={`product-item-${_id}`}
      className="w-full mx-auto text-white rounded-lg"
    >
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

          <div className="bg-gray-900 w-fit py-1 lg:py-2 rounded-full px-2 lg:px-4 absolute top-4 left-4">
            <p className="text-white font-semibold">{discount || 0} % off</p>
          </div>
        </div>

        <div className="bg-gray-900 flex flex-col items-center p-4">
          <h3 className="text-center text-lg font-semibold">
            {name.substring(0, 20)}
          </h3>
          <p>Model: {model}</p>
          <p>Price: {price} BDT</p>
          <Rating rating={rating} />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-white text-lg font-semibold mb-2">
            {name.substring(0, 25)}
          </h3>

          {features.slice(0, 4).map((feature) => (
            <p key={feature.substring(0, 10)} className="text-white text-left">
              {feature}
            </p>
          ))}
          <Link href={`/products/${_id}`}>
            <button className="mt-4 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300">
              See More
            </button>
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

export default ProductItem;
