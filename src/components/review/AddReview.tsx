"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import { toast } from "@/hooks/use-toast";

const AddReview = ({ productId }: { productId: string }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const { data: session } = useSession();
  const [addReview] = useAddReviewMutation();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (feedback && rating && session?.user._id) {
      const newReview = {
        product: productId,
        customer: session?.user?._id,
        customerName: session?.user?.name,
        rating,
        feedback,
      };

      const res = await addReview(newReview).unwrap();
      if (res.success) {
        toast({
          title: "Review added successfully!",
          description: "Your review has been submitted successfully!",
        });
      }
      setFeedback("");
      setRating(0);
    }
  };

  return (
    <div className="relative">
      <div>
        {!session?.user?.email && (
          <div className=" absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <Button asChild className="bg-white text-black px-8 py-2 rounded">
              <Link href={"/login"}>Login</Link>
            </Button>
          </div>
        )}
      </div>
      <form className="p-2">
        <h2 className="mb-2">Add Review</h2>
        <div>
          <textarea
            className="w-full p-2 border rounded mb-4"
            placeholder="Leave your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-2xl ${
                  rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
