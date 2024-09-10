import { Types } from "mongoose";

type TChildren = {
  children: React.ReactNode;
};

type TProduct = {
  _id?: string;
  title: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  ratings: number;
  numReviews: number;
  countInStock: number;
  variants: string;
  isFlashSale: boolean;
  isFeatured: boolean;
  // createdAt: string;
  // updatedAt: string;
  // __v: number;
};

type TQuery = {
  q: string;
  category: string;
  sort: string;
  price: string;
  rating: string;
  page: string;
};

type TUser = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  imgUrl?: string;
  isAdmin: boolean;
};
