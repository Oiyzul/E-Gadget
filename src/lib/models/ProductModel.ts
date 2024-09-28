import { model, models, Schema } from "mongoose";
import { TProduct } from "../../../types";

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true },
    images: { type: [String], required: true },
    colors: { type: [String], required: true },
    rating: { type: Number },
    numReviews: { type: Number },
    countInStock: { type: Number, required: true },
    variant: { type: String },
    isFlashSale: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    discount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
