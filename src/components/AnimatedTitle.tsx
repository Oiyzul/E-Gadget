"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="flex items-center justify-between border-b-2 h-max pb-2">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-500 dark:text-white m-0 p-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Button
          asChild
          className="bg-gray-900 rounded-[10px] hover:bg-gray-950 px-5 text-white"
        >
          <Link href={link} className="flex gap-2">
            View All <ArrowBigRight />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default AnimatedTitle;
