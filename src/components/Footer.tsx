import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black text-sm py-12">
      <MaxWidthWrapper className="h-full flex flex-col justify-between min-h-[50vh]">
        <div className="flex gap-5 justify-between">
          {/* Company Info */}
          <div className="flex-1 mx-auto">
            <Link href="/">
              <h1 className="text-2xl font-bold tracking-widest text-sky-500 uppercase">
                E-Gadget
              </h1>
            </Link>
            <p className="w-2/3 text-gray-500 dark:text-gray-300">
              Your one-stop shop for the latest and greatest in electronic
              gadgets.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex-1 flex flex-col items-center">
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/products" className="">
                    Mobiles
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/flash-sale" className="">
                    Flash Sales
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/dashboard" className="">
                    Dashboard
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/login" className="">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="flex-1 flex flex-col items-center">
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
          </div> */}
          <div className="flex-1 flex flex-col items-center">
            <div>
              <h2 className="text-xl font-bold mb-4">Our Company</h2>
              <ul className="flex flex-col gap-2">
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/about-us" className="">
                    About Us
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/contact-us" className="">
                    Contact Us
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/delivery-policy" className="">
                    Delivery
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="legal-notice" className="">
                    Legal Notice
                  </Link>
                </li>
                <li className="hover:text-gray-700 dark:hover:text-gray-300">
                  <Link href="/terms-conditions" className="">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex">
          <p className="flex-1">© 2024 E-Gadget. All rights reserved.</p>

          <div className="flex-1 flex gap-2 items-center justify-center">
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
          <div className="flex-1 flex justify-center">
            <div>
              <img alt="visa" />
            </div>
            <div>
              <img alt="mastercard" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
