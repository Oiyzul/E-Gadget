"use client";
import { ArrowBigRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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
    <div className="mt-20 flex flex-col items-center">
      <div className="text-center my-10">
        <h1 className="text4xl md:text-5xl text-gray-500 font-bold mb-2">
          Top Brands
        </h1>
        <p className="">Choose from one of our top brands.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-200">
        <div className="relative">
          <Link href={topBrands[0].link}>
            <Image
              src={topBrands[0].image}
              alt={topBrands[0].brand}
              width={300}
              height={400}
            />
          </Link>
          <p className="absolute -top-2 left-[30%] text-2xl font-semibold text-blue-800">
            {topBrands[0].brand}
          </p>
        </div>

        <div className="">
          <div className="relative">
            <Link href={topBrands[1].link}>
              <Image
                src={topBrands[1].image}
                alt={topBrands[1].brand}
                fill
              />
            </Link>
            <p className="absolute -top-3 left-[28%] text-2xl font-semibold text-sky-800">
              {topBrands[1].brand}
            </p>
          </div>
          <div className="relative">
            <Link href={topBrands[2].link}>
              <Image
                src={topBrands[2].image}
                alt={topBrands[2].brand}
                fill
              />
            </Link>
            <p className="absolute -top-3 left-[28%] text-2xl font-semibold text-cyan-700">
              {topBrands[2].brand}
            </p>
          </div>
        </div>
        
        <div className="relative">
          <Link href={topBrands[3].link}>
            <Image
              src={topBrands[3].image}
              alt={topBrands[3].brand}
              className=""
              fill
            />
          </Link>
          <p className="absolute -top-4 left-[39%] text-2xl font-semibold text-blue-900">
            {topBrands[3].brand}
          </p>
        </div>
      </div>
      <Button
        asChild
        className="mt-10 bg-gray-900 rounded-full hover:bg-gray-950 px-5"
      >
        <Link href="/products" className="flex gap-2">
          View All <ArrowBigRight />
        </Link>
      </Button>
    </div>
  );
};

export default TopBrands;
