"use client";

import { cn } from "@/lib/utils";
import { Menu, Moon, ShoppingBag, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl text-bold text-sky-500">E-Gadget</h1>
          </div>
          <ul className="hidden md:flex flex-1 items-center justify-between">
            <li>Home</li>
            <li>Categories</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-3 lg:gap-5">
            <User />
            <ShoppingBag />
            {theme ? (
              <div
                className={cn(
                  "flex gap-2 border-2 p-1.5 rounded-full",
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                )}
              >
                <Sun
                  className={cn(
                    "h-4 w-4 cursor-pointer",
                    theme === "light" && "hidden"
                  )}
                  onClick={() => setTheme("light")}
                />

                <Moon
                  className={cn(
                    "h-4 w-4 cursor-pointer",
                    theme === "dark" && "hidden"
                  )}
                  onClick={() => setTheme("dark")}
                />
              </div>
            ) : null}
            <div className="md:hidden">
              <Menu
                className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {open && (
          <div className="bg-black ml-auto w-1/2 h-[100vh-100px] flex flex-col items-center text-white absolute top-12 right-0">
            <span
              className="ml-auto p-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </span>
            <ul className="flex-1 flex flex-col items-center gap-10 justify-center">
              <li>Home</li>
              <li>Categories</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
            <User />
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
