import dbConnect from "@/lib/dbConnect";
import Review from "@/lib/models/reviewModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();

  const { id } = params;
  const reiews = await Review.find({
    product: id,
  }).sort({ _id: -1 });

  return NextResponse.json(
    {
      success: true,
      message: "Reviews retrieved successfully.",
      data: reiews,
    },
    { status: 200 }
  );
};
