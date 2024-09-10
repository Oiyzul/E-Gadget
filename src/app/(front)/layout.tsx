import dynamic from "next/dynamic";
import { TChildren } from "../../../types";

const NoSSRNav = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false,
});
export default function FrontLayout({ children }: TChildren) {
  return (
    <>
      <div className="flex-grow">
        <NoSSRNav />
        {children}
      </div>
      <div className="flex-shrink-0 p-2 bg-gray-500 text-white text-sm">
        Footer
      </div>
    </>
  );
}
