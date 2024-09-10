"use client";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import b3 from "@/assets/b3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion as m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import * as React from "react";

const textAnimations = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
      type: "stiff",
    },
  },
};
const carouselText = {
  initial: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const { theme } = useTheme();
  return (
    <div className="">
      <div className="text-center py-10">
        <h1 className=" text-4xl md:text-6xl font-semibold">
          Welcome to E-Gadget
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl text-gray-500 font-semibold">
          Your one-stop shop for your phone.
        </p>
      </div>

      <div className={cn(theme === 'light' ? 'bg-gray-900': 'bg-black')}>
        <Carousel
          plugins={[plugin.current]}
          className="max-w-screen-xl mx-auto"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselContents.map((item, index) => (
              <CarouselItem
                key={`banner-${index}`}
                className="grid grid-cols-1 sm:grid-cols-2 relative"
              >
                <div className="p-1 col-span-1 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative">
                  <Image src={item.image} alt="mobile" fill objectFit="cover" />
                </div>
                <m.div
                  className="sm:col-span-1 hidden sm:h-[400px] md:h-[450px] lg:h-[500px] sm:flex flex-col gap-5 justify-center px-[60px] py-2 md:p-[23px] lg:p-[51.6px]"
                  variants={textAnimations}
                  initial={"initial"}
                  animate={index === item.id - 1 && "visible"}
                >
                  <m.h1
                    className="text-4xl font font-semibold md:text-5xl lg:text-7xl text-white"
                    variants={carouselText}
                  >
                    {item.title}
                  </m.h1>
                  <m.p
                    className="text-3xl text-cyan-500"
                    variants={carouselText}
                  >
                    {item.description}
                  </m.p>
                  <m.p
                    className="text-3xl text-blue-500"
                    variants={carouselText}
                  >
                    {item.price} BDT
                  </m.p>
                </m.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

const carouselContents = [
  {
    id: 1,
    title: "New Collection",
    description: "Choose before stock out.",
    price: 43000,
    image: b1,
  },
  {
    id: 2,
    title: "Exclusive Deal",
    description: "Buy 2 get 1 free.",
    price: 120000,
    image: b2,
  },
  {
    id: 3,
    title: "Hot Sale",
    description: "Limited time offer.",
    price: 40000,
    image: b3,
  },
];
