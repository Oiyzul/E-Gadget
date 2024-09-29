"use client";

import { useGetAllReviewsQuery } from "@/redux/features/review/reviewApi";
import { TReview } from "../../../types";

const Reviews = ({ productId }: { productId: string }) => {
  const { data: reviews = [], isLoading } = useGetAllReviewsQuery(productId);

  if (isLoading) return <div>Loading...</div>;

  if (!reviews?.data?.length) return <div>No reviews found.</div>;

  return (
    <div className="my-10">
      <div className="my-5">
        <h3 className="text-xl font-semibold ml-4">Customer feedbacks</h3>
        {reviews?.data?.map((review: TReview) => (
          <div key={review.rating} className="border-b-2 border-gray-300 p-5">
            <p>{review.customerName}</p>
            <p>Rating: {review.rating}</p>
            <p>Feedback: {review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
