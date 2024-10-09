import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white text-sm py-8">
      <MaxWidthWrapper className="">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">E-Gadget</h2>
            <Link href="/">
              <h1 className="text-2xl font-bold tracking-widest text-sky-500 uppercase">
                E-Gadget
              </h1>
            </Link>
            <p className="text-gray-400 w-2/3">
              Your one-stop shop for the latest and greatest in electronic
              gadgets.
            </p>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white"
                >
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="contact-us"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 items-center -ml-2">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <X />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin />
              </Link>
            </div>
          </div>
          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full outline-none p-2 mb-2 text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 E-Gadget. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
