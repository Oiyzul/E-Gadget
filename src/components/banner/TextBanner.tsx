"use client";

import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion as m } from "framer-motion";
import { cn } from "@/lib/utils";

const carouselContents = [
  {
    id: 1,
    title: "New Collection",
    description: "Choose before stock out.",
    price: 43000,
    titleColor: "text-white",
    desColor: "text-cyan-500",
    priceColor: "text-green-500",
  },
  {
    id: 2,
    title: "Exclusive Deal",
    description: "Buy 2 get 1 free.",
    price: 120000,
    titleColor: "text-orange-500",
    desColor: "text-purple-500",
    priceColor: "text-blue-500",
  },
  {
    id: 3,
    title: "Hot Sale",
    description: "Limited time offer.",
    price: 40000,
    titleColor: "text-green-500",
    desColor: "text-white",
    priceColor: "text-red-500",
  },
];

const textAnimations = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
      type: "stiff",
    },
  },
};
const carouselText = {
  initial: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

// use text animation

const TextBanner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      // opts={{
      //   align: "start",
      // }}
      plugins={[plugin.current]}
      orientation="vertical"
      className="w-full mx-auto"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="max-h-[380px] sm:max-h-[400px] md:max-h-[450px]">
        {carouselContents.map((item, index) => (
          <CarouselItem key={`bannerText-${index}`} className="">
            {/* <div className="p-1 col-span-1 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative">
          <Image
            src={item.image}
            alt="mobile"
            fill
            className="object-cover"
          />
        </div> */}
            <m.div
              className="sm:h-[400px] md:h-[430px] lg:h-[500px] sm:flex flex-col gap-5 justify-center px-5 md:px-[60px] py-2 md:p-[23px] lg:p-[51.6px] overflow-hidden"
              variants={textAnimations}
              initial={"initial"}
              whileInView={"visible"}
            >
              <m.h1
                className={cn(
                  "text-4xl font font-semibold md:text-4xl lg:text-7xl",
                  item.titleColor
                )}
                variants={carouselText}
              >
                {item.title}
              </m.h1>
              <m.p
                className={cn("text-3xl text-cyan-500", item.desColor)}
                variants={carouselText}
              >
                {item.description}
              </m.p>
              <m.p
                className={cn("text-3xl text-blue-500", item.priceColor)}
                variants={carouselText}
              >
                {item.price} BDT
              </m.p>
            </m.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TextBanner;
