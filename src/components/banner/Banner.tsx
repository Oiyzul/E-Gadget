"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import ImageBanner from "./ImageBanner";
import TextBanner from "./TextBanner";

const Banner = () => {
  const { theme } = useTheme();
  return (
    <div className="">
      <div className="text-center">
        {/* <h1 className=" text-4xl md:text-6xl font-semibold">
          Welcome to E-Gadget
        </h1> */}
        {/* <p className="text-sm md:text-xl lg:text-2xl text-gray-500 font-semibold">
          Your one-stop shop for your phone.
        </p> */}
      </div>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 mt-5",
          theme === "light" ? "bg-black" : "bg-black"
        )}
      >
        <div>
          <ImageBanner />
        </div>
        <div className="hidden sm:block sm:grid-cols-1 overflow-hidden">
          <TextBanner />
        </div>
      </div>
    </div>
  );
};

export default Banner;
