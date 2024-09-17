import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="col-span-1 min-h-screen bg-gray-900 dark:bg-black flex flex-col item-center text-white md: lg:p-12">
      <Link href="/" className="font-semibold mb-5">
        <ArrowLeft />
      </Link>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="/dashboard/products">Products</Link>
        </li>
        <li>
          <Link href="/dashboard/orders">Orders</Link>
        </li>
        <li>
          <Link href="/dashboard/products/add-product">Add Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
