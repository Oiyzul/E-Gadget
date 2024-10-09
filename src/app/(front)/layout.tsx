import dynamic from "next/dynamic";
import { TChildren } from "../../../types";
import { Footer } from "@/components";

const NoSSRNav = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false,
});
export default function FrontLayout({ children }: TChildren) {
  return (
    <>
      <NoSSRNav />
      {children}
      <Footer />
    </>
  );
}
