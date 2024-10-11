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
    <div className="hidden md:block mt-10 overflow-x-hidden">
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
      <div className="hidden md:grid md:grid-cols-3 gap-5">
        <div className="my-auto relative shadow-xl hover:shadow-2xl rounded-md">
          <Link href={topBrands[0].link}>
            <div className="relative w-full h-[410px] rounded-md">
              <Image
                src={topBrands[0].image}
                alt={topBrands[0].brand}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <p className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-semibold text-white z-10 bg-black/30 px-3 py-1 rounded">
            {topBrands[0].brand}
          </p>
        </div>

        <div className="h-[410px] flex flex-col gap-y-5 overflow-hidden">
          <div className="relative shadow-xl hover:shadow-2xl rounded-md">
            <Link href={topBrands[1].link}>
              <div className="relative h-[200px] mx-auto">
                <Image
                  src={topBrands[1].image}
                  alt={topBrands[1].brand}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </Link>
            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl font-semibold text-white bg-black/30 px-3 py-1 rounded">
              {topBrands[1].brand}
            </p>
          </div>
          <div className="relative shadow-xl hover:shadow-2xl rounded-md">
            <Link href={topBrands[2].link}>
              <div className="relative h-[200px] mx-auto overflow-hidden">
                <Image
                  src={topBrands[2].image}
                  alt={topBrands[2].brand}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </Link>
            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl font-semibold text-white bg-black/30 px-3 py-1 rounded">
              {topBrands[2].brand}
            </p>
          </div>
        </div>

        <div className="my-auto relative shadow-xl hover:shadow-2xl rounded-md">
          <Link href={topBrands[3].link}>
            <div className="relative lg:w-[400px] h-[410px]">
              <Image
                src={topBrands[3].image}
                alt={topBrands[3].brand}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <p className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-semibold text-white bg-black/30 px-3 py-1 rounded">
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
