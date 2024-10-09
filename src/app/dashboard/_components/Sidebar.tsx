"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <nav className="sticky top-0 min-h-screen bg-gray-900 dark:bg-black flex flex-col item-center text-white px-2 pt-8 md:p-4 lg:p-12">
      {/* <Link href="/" className="font-semibold mb-5 flex items-center gap-1">
        <ArrowBigLeft /> Home
      </Link> */}
      <ul className="flex flex-col gap-5 mt-10">
        {session?.user.isAdmin ? (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/products">Products</Link>
            </li>
            <li>
              <Link href="/dashboard/orders">Orders</Link>
            </li>
            <li>
              <Link href="/dashboard/products/add-product">Add Product</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/my-orders">Orders</Link>
            </li>
            <li>
              <Link href="/dashboard/user/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
