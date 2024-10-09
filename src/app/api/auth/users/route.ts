import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await auth();
  if (!session || !session.user.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await dbConnect();

  const users = await User.find();
  console.log(users);
  return NextResponse.json(
    {
      success: true,
      message: "Users retrieved successfully.",
      data: users,
    },
    { status: 200 }
  );
};
