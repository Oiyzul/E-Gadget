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
  rating: number;
  numReviews: number;
  countInStock: number;
  variants: string;
  isFlashSale: boolean;
  isFeatured: boolean;
  color: string[];
  discount: number;
};

type TProductProps = {
  product: TProduct;
  key: string;
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

type TOrderItem = {
  productId: string;
  name: string;
  qty: number;
  image: string;
  price: number;
  color: string;
  variants: string;
  discount: number;
};

type TCart = {
  items: OrderItem[]
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  paymentMethod: string
  shippingAddress: ShippingAddress
}

type TShippingAddress = {
  fullName: string
  address: string
  city: string
  postalCode: string
  country: string
}