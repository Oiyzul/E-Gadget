import { Types } from "mongoose";

type TChildren = {
  children: React.ReactNode;
};

type TProduct = {
  _id?: string;
  name: string;
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
  variant: string;
  isFlashSale: boolean;
  isFeatured: boolean;
  colors: string[];
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
  brand: string;
  rating: string;
  page: string;
};

type TUser = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password?: string;
  imgUrl?: string;
  isAdmin: boolean;
};

type TCartItem = {
  id?: string;
  name: string;
  image: string;
  qty: number;
  image: string;
  price: number;
  color: string;
  variant: string;
  discount: number;
};

type TCart = {
  items: OrderItem[];
  totalQuantity: number;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
};

type TShippingAddress = {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type TOrderItem = {
  product?: string;
  name: string;
  qty: number;
  image: string;
  price: number;
  color?: string;
  variant: string;
  discount: number;
};

type TOrder = {
  _id?: Types.OrderId;
  customer?: Types.ObjectId;
  items: [TOrderItem];
  shippingAddress: TShippingAddress;
  paymentMethod?: string;
  paymentResult?: { id: string; status: string; email_address: string };
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt: string;
};

type TReview = {
  _id?: Types.OrderId;
  customer: Types.ObjectId;
  customerName: string;
  product: Types.ObjectId;
  rating: number;
  feedback: string;
};
