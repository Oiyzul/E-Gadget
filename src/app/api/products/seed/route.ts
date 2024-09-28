// import { data } from "@/lib/data";
// import dbConnect from "@/lib/dbConnect";
// import Product from "@/lib/models/productModel";
// import User from "@/lib/models/userModel";
// import { NextResponse } from "next/server";


// export const GET = async () => {
//   const { users, products } = data;
//   console.log(products)
//   await dbConnect();

//   // await User.deleteMany();
//   // await User.insertMany(users);

//   await Product.deleteMany();
//   await Product.insertMany(products);

//   return NextResponse.json({
//     message: "Data imported successfully",
//     users,
//     products,
//   });
// };

import { NextResponse } from "next/server"

export const GET = async () => {
  return new NextResponse(null)
}