"use client";

import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import b3 from "@/assets/b3.jpg";
import Image from "next/image";

const carouselImages = [b1, b2, b3];

const ImageBanner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="col-span-1 w-full mx-auto"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselImages.map((img, index) => (
          <CarouselItem key={`banner-${index}`} className="">
            <div className="p-1 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative">
              <Image src={img} alt="mobile" fill className="object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
<CarouselNext /> */}
    </Carousel>
  );
};

export default ImageBanner;
