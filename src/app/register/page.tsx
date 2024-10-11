import Image from "next/image";
import RegisterForm from "./SignupForm";
import bg from "@/assets/b3.jpg";

const SignupPage = () => {
  return (
    <section className="relative">
      <div className="">
        <Image src={bg} fill alt="background" className="object-cover" />
      </div>
      <div className="absolute w-screen h-screen z-10 bg-black/70"></div>
      <div className="flex flex-col items-center justify-center h-screen">
        <RegisterForm />
      </div>
    </section>
  );
};

export default SignupPage;
