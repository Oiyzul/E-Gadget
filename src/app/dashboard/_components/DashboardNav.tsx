"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, PlusCircle, Sun } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";

const DashboardNav = () => {
  const { data } = useSession();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="h-20">
      <MaxWidthWrapper>
        <div className="flex justify-end">
          
          <div className="flex items-center gap-10">
            <p className="font-semibold">{data?.user?.name}</p>

            <Button
              variant={"outline"}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </Button>
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
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default DashboardNav;
