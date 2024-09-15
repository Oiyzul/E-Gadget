import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/userModel";

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();
  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
