"use client";

import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const topBrands = [
  {
    brand: "Samsung",
    image: "https://i.ibb.co/F6Ff04T/Samsung-Galaxy-A35-5-G.jpg",

    link: "/products?brand=Samsung",
  },
  {
    brand: "Xiaomi",
    image: "https://i.ibb.co/1frtrNL/Redmi-Note-13-Pro-4-G-1-768x768.jpg",
    link: "/products?brand=Xiaomi",
  },
  {
    brand: "Realme",
    image: "https://i.ibb.co/c8v0mNY/Realme-12-Pro-5-G-768x768.jpg",
    link: "/products?brand=Realme",
  },

  {
    brand: "Oppo",
    image: "https://i.ibb.co/r4tXSqx/Oppo-Reno-11-Pro-5-G.jpg",
    link: "/products?brand=Oppo",
  },
];

const TopBrands = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-5">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2 text-gray-500 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Top Brands
        </motion.h1>
        <motion.p
          className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Choose from one of our top brands.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="my-auto relative shadow-xl hover:shadow-2xl">
          <Link href={topBrands[0].link}>
            <div className="relative w-[400px] h-[430px]">
              <Image
                src={topBrands[0].image}
                alt={topBrands[0].brand}
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="absolute -top-2 left-[30%] text-2xl font-semibold text-blue-800">
            {topBrands[0].brand}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative shadow-xl hover:shadow-2xl">
            <Link href={topBrands[1].link}>
              <div className="relative w-[400px] h-[210px] mx-auto">
                <Image
                  src={topBrands[1].image}
                  alt={topBrands[1].brand}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="absolute -top-3 left-[28%] text-2xl font-semibold text-sky-800">
              {topBrands[1].brand}
            </p>
          </div>
          <div className="relative shadow-xl hover:shadow-2xl">
            <Link href={topBrands[2].link}>
              <div className="relative w-[400px] h-[210px] mx-auto">
                <Image
                  src={topBrands[2].image}
                  alt={topBrands[2].brand}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="absolute -top-3 left-[28%] text-2xl font-semibold text-cyan-700">
              {topBrands[2].brand}
            </p>
          </div>
        </div>

        <div className="my-auto relative shadow-xl hover:shadow-2xl">
          <Link href={topBrands[3].link}>
            <div className="relative w-[400px] h-[430px]">
              <Image
                src={topBrands[3].image}
                alt={topBrands[3].brand}
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="absolute -top-4 left-[39%] text-2xl font-semibold text-blue-900">
            {topBrands[3].brand}
          </p>
        </div>
      </div>
      <motion.div
        className="mx-auto w-full text-center"
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
      >
        <Button
          asChild
          className="mt-7 bg-gray-900 rounded-full hover:bg-gray-950 px-5 text-white"
        >
          <Link href="/products" className="flex gap-2">
            View All <ArrowBigRight />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default TopBrands;
