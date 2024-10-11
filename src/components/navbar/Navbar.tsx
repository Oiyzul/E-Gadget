"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { selectCart } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  ShoppingBag,
  Sun,
  User,
  User2,
  X,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartModal from "../cart/CartModal";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navLinks = [
  { link: "/", title: "Home" },
  { link: "/products", title: "Mobiles" },
  { link: "/flash-sale", title: "Flash Sale" },
  { link: "/about-us", title: "About Us" },
  { link: "/contact-us", title: "Contact Us" },
];

const listVariants = {
  closed: { x: "100vw" },
  opened: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { items } = useAppSelector(selectCart);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-screen bg-white dark:bg-black fixed top-0 z-[999] transition-all duration-300 overflow-hidden flex items-center",
        isScrolled ? "h-12 shadow-lg" : "h-16"
      )}
    >
      <MaxWidthWrapper className="overflow-x-hidden">
        <div className="w-full flex items-center justify-between">
          <div className="">
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-bold tracking-widest text-sky-500 uppercase">
                E-Gadget
              </h1>
            </Link>
          </div>
          <ul className="hidden md:flex flex-1 items-center justify-center md:gap-2 lg:gap-5">
            {navLinks.map(({ link, title }) => (
              <li
                key={title}
                className="hover:text-gray-500 hover:dark:text-gray-300"
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-2 md:gap-3 lg:gap-5 overflow-hidden">
            <div>
              {session?.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full w-10 h-10 px-2 font-semibold text-xl capitalize relative"
                    >
                      {session?.user.image ? (
                        <Image
                          src={session?.user.image}
                          fill
                          alt="user"
                          className="object-cover"
                        />
                      ) : (
                        session?.user.name?.substring(0, 1)
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-0">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href={"/dashboard/profile"}
                          className="flex gap-4 items-center"
                        >
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={"/dashboard"}
                          className="flex gap-4 items-center"
                        >
                          <LayoutDashboard className=" h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => signOut({ callbackUrl: "/login" })}
                    >
                      <LogOut className="mr-4 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={"/login"}>
                  <Button
                    variant="outline"
                    className="border-none flex items-center justify-center gap-2"
                  >
                    <span className="hidden md:inline text-[16px]">Login</span>
                    <User2 size={20} />
                  </Button>
                </Link>
              )}
            </div>

            <div className="relative">
              <div
                className="relative pr-4 flex items-center gap-2 cursor-pointer"
                onClick={() => setIsCartOpen((prev) => !prev)}
              >
                <span className="hidden md:inline">Cart</span>
                <ShoppingBag />
                <div className="absolute -top-2 right-2 bg-gray-900 p-2 rounded-full text-white w-5 h-5 flex items-center justify-center font-semibold">
                  <span>{items.length}</span>
                  {/* {cart.reduce((a, c) => a + c.qty, 0)} */}
                </div>
              </div>

              {isCartOpen ? (
                <CartModal
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                />
              ) : null}
            </div>

            <div>
              {theme ? (
                <div
                  className={cn(
                    "px-2 flex gap-2 border-2 p-1.5 rounded-full",
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
            </div>

            <div className="md:hidden">
              <Menu
                className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              />
              {open && (
                <motion.div
                  className="w-screen h-screen bg-white dark:bg-black flex flex-col items-center justify-center gap-7 text-2xl  fixed top-0 left-0 z-50"
                  variants={listVariants}
                  initial="closed"
                  animate="opened"
                >
                  <span
                    className="absolute right-5 top-5 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <X className="w-7 h-7 font-bold" />
                  </span>
                  <ul className="flex-1 flex flex-col gap-10 justify-center">
                    {navLinks.map(({ link, title }) => (
                      <motion.li
                        key={title}
                        variants={listItemVariants}
                        onClick={() => setOpen(false)}
                      >
                        <Link href={link}>{title}</Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
