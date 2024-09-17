import Link from "next/link";
import React from "react";

const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">You are not authorized.</h1>
        <p className="text-xl">Go to</p>
        <Link href={"/login"} className="text-blue-500">
          Login
        </Link>
        <Link href={"/"} className="text-blue-500">
          Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
