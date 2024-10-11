import Image from "next/image";
import SigninForm from "./SigninForm";
import bg from "@/assets/b3.jpg";

const SigninPage = () => {
  return (
    <section className="relative">
      <div className="">
        <Image src={bg} fill alt="background" className="object-cover" />
      </div>
      <div className="absolute w-screen h-screen z-10 bg-black/70"></div>
      <div className="flex flex-col items-center justify-center h-screen">
        <SigninForm />
      </div>
    </section>
  );
};

export default SigninPage;
