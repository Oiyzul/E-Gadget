import { model, models, Schema } from "mongoose";

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
    ratings: { type: Number },
    numReviews: { type: Number },
    countInStock: { type: Number, required: true },
    variants: { type: String },
    isFlashSale: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema) || models.Product;

export default Product;
