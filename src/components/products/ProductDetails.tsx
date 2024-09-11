"use client";

import { motion } from "framer-motion";
import { TProductProps } from "../../../types";
import Image from "next/image";
import { useState } from "react";
import { div } from "framer-motion/client";
import Rating from "../Rating";
import { Separator } from "../ui/separator";

const ProductDetails = ({ product }: TProductProps) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const {
    title,
    model,
    brand,
    description,
    price,
    variants,
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
                  alt={product.title}
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
              alt={product.title}
              fill
              className="rounded-lg object-contain"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 md:pl-8">
          <div>
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
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
              Variant: {variants}
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
          <div>
            <input type="text" name="" id="" />
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg mb-4">
              Add to Cart
            </button>
          </div>
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
    </div>
  );
};

export default ProductDetails;
