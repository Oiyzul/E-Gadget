import { model, models, Schema } from "mongoose";
import { TReview } from "../../../types";

const reviewSchema = new Schema<TReview>(
  {
    product: { type: Schema.Types.ObjectId, required: true },
    customer: { type: Schema.Types.ObjectId, required: true },
    customerName: { type: String, required: true },
    rating: { type: Number, required: true },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

const Review = models.Review || model("Review", reviewSchema);

export default Review;
