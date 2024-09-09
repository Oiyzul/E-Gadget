import { Types } from "mongoose";

type TChildren = {
  children: React.ReactNode;
};

type TProduct = {
  _id: Types.ObjectId;
  title: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  description: string;
  features: [string];
  images: [string];
  ratings: number;
  numReviews: number;
  countInStock: number;
  variants: string;
  isFlashSale: boolean;
  isFeatured: boolean;
};

type TQuery = {
  q: string;
  category: string;
  sort: string;
  price: string;
  rating: string;
  page: string;
};
