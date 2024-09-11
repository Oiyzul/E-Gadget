import dynamic from "next/dynamic";
import { TChildren } from "../../../types";
import { BrandNames, Footer } from "@/components";

const NoSSRNav = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false,
});
export default function FrontLayout({ children }: TChildren) {
  return (
    <>
      <NoSSRNav />
      {children}
      <BrandNames />
      <Footer />
    </>
  );
}
