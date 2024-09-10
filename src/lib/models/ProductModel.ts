import { model, models, Schema } from "mongoose";
import { TProduct } from "../../../types";

const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true },
    images: { type: [String], required: true },
    rating: { type: Number },
    numReviews: { type: Number },
    countInStock: { type: Number, required: true },
    variants: { type: String },
    isFlashSale: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
