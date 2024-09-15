import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/userModel";

export const PUT = auth(async (req: any) => {
  if (!req.auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { user } = req.auth;

  const { name, email, password } = await req.json();

  await dbConnect();

  try {
    const dbUser = await User.findById(user._id);
    if (!dbUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    dbUser.name = name;
    dbUser.email = email;
    dbUser.password = password
      ? await bcrypt.hash(password, 5)
      : dbUser.password;

    return NextResponse.json(
      {
        success: true,
        message: "User updated successfully.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
});
