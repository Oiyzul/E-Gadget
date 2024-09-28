import dbConnect from "@/lib/dbConnect";
import Review from "@/lib/models/reviewModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const payload = await request.json();
  
  await dbConnect();

  const newReview = await Review.create(payload);
  
  return NextResponse.json(
    {
      success: true,
      message: "Review added successfully.",
      data: newReview,
    },
    { status: 201 }
  );
};
