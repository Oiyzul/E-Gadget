"use client";

import { cn } from "@/lib/utils";
import { selectCart } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Moon,
  ShoppingBag,
  Sun,
  User,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
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
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { items } = useAppSelector(selectCart);
  const { data: session } = useSession();

  return (
    <nav
      className={cn("h-16 flex flex-col items-center justify-center relative")}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex-1">
          <Link href="/">
              <h1 className="text-2xl font-bold tracking-widest text-sky-500 uppercase">E-Gadget</h1>
            </Link>
          </div>
          <ul className="hidden md:flex flex-1 items-center justify-center gap-7">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Gadgets</Link>
            </li>
            <li>
              <Link href={"/flash-sale"}>Flash Sale</Link>
            </li>
          </ul>
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-3 lg:gap-5">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full w-10 h-10 px-2 font-semibold text-xl capitalize relative"
                  >
                    {/* <User /> */}
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
                <DropdownMenuContent className="w-56">
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
                        {/* <ShoppingBag className=" h-4 w-4" /> */}
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
                <Button className="flex items-center justify-center">
                  <LogIn className="mr-2 mt-1 w-4 h-4" />{" "}
                  <span className="text-[16px]">Login</span>
                </Button>
              </Link>
            )}

            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen((prev) => !prev)}
            >
              <ShoppingBag />
              <div className="absolute -top-3 -right-2 bg-gray-900 p-2 rounded-full text-white w-6 h-6 flex items-center justify-center font-semibold">
                <span>{items.length}</span>
                {/* {cart.reduce((a, c) => a + c.qty, 0)} */}
              </div>
            </div>
            {isCartOpen ? (
              <CartModal open={isCartOpen} setOpen={setIsCartOpen} />
            ) : null}

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
          <div className="bg-black ml-auto w-1/2 h-[100vh] flex flex-col items-center text-white absolute top-12 right-0 z-50">
            <span
              className="ml-auto p-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </span>
            <ul className="flex-1 flex flex-col items-center gap-10 justify-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={"/products"}>Gadgets</Link>
              </li>
              <li>
                <Link href={"/flash-sale"}>Flash Sale</Link>
              </li>
            </ul>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
