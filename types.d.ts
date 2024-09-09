type TChildren = {
  children: React.ReactNode;
};

type TProduct = {
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
