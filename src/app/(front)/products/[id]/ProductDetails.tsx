"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { TProductProps } from "../../../../../types";
import Rating from "../../../../components/Rating";
import { Separator } from "../../../../components/ui/separator";
import AddToCart from "../../../../components/cart/AddToCart";
import AddReview from "@/components/review/AddReview";
import Reviews from "@/components/review/Reviews";

const ProductDetails = ({ product }: TProductProps) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const {
    _id,
    name,
    model,
    brand,
    description,
    price,
    variant,
    features,
    images,
    rating,
    numReviews,
    countInStock,
  } = product;
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-start">
          <div className="flex flex-col mt-4 space-y-2">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer w-28 h-32 relative border rounded-lg"
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[400px] h-[390px] lg:w-[440px] lg:h-[400px]"
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 md:pl-8">
          <div>
            <h1 className="text-3xl font-bold mb-3">{name}</h1>
            <div className="flex items-center h-5 space-x-4">
              <p className="text-xl font-semibold text-sky-500">{price} BDT</p>
              <Separator orientation="vertical" />
              <Rating rating={rating} />
              <span>({numReviews} reviews)</span>
            </div>
          </div>
          <Separator className="my-5" />
          <ul className="list-disc list-inside my-4">
            <p className="text-lg text-gray-500 dark:text-white font-semibold">
              Brand: {brand}
            </p>
            <p className="text-lg text-gray-500 dark:text-white font-semibold">
              Model: {model}
            </p>
            <p className="text-lg text-gray-500 dark:text-white font-semibold">
              Variant: {variant}
            </p>
            <h3 className="text-xl text-gray-500 dark:text-white font-semibold">
              Main Features
            </h3>
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-gray-200 font-semibold"
              >
                {feature}
              </li>
            ))}
          </ul>

          {countInStock !== 0 ? (
            <div>
              <AddToCart product={product} />
            </div>
          ) : (
            <div className="text-red-500 font-bold">
              <p>Out of Stock</p>
            </div>
          )}
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-xl text-gray-500 dark:text-white font-semibold mb-3">
          Description
        </h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p>
        <p className="text-gray-700 dark:text-gray-200 font-semibold mb-4">
          Availbale: {countInStock}
        </p>
        {product.isFlashSale && (
          <span className="text-red-500 font-bold">Flash Sale! Hurry Up!</span>
        )}
      </div>
      <AddReview productId={_id!} />
      <Reviews productId={_id!} />
    </div>
  );
};

export default ProductDetails;
