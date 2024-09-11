import { cache } from "react";
import dbConnect from "../dbConnect";
import Product from "../models/productModel";
import { TProduct, TQuery } from "../../../types";

export const revalidate = 3600;

const getFlashSales = cache(async () => {
  await dbConnect();
  const flashSaleProducts = await Product.find({ isFlashSale: true })
    .limit(6)
    .lean();
  return flashSaleProducts as TProduct[];
});

const getFeatured = cache(async () => {
  await dbConnect();
  const featuredProducts = await Product.find({ isFeatured: true })
    .limit(6)
    .lean();
  return featuredProducts as TProduct[];
});

const getLatest = cache(async () => {
  await dbConnect();
  const latestProducts = await Product.find({})
    .sort({ _id: -1 })
    .limit(6)
    .lean();
  return latestProducts as TProduct[];
});

const getById = cache(async (id: string) => {
  await dbConnect();
  const product = await Product.findById(id).lean();
  return product as TProduct;
});

const getByQuery = cache(
  async ({ q, category, sort, price, rating, page = "1" }: TQuery) => {
    await dbConnect();

    const queryFilter =
      q && q !== "all"
        ? {
            name: {
              $regex: q,
              $options: "i",
            },
          }
        : {};

    const categoryFilter = category && category !== "all" ? { category } : {};

    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

    const priceFilter =
      price && price !== "all"
        ? {
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};

    const order: Record<string, 1 | -1> =
      sort === "lowest"
        ? { price: 1 }
        : sort === "highest"
        ? { price: -1 }
        : sort === "toprated"
        ? { rating: -1 }
        : { _id: -1 };

    const PAGE_SIZE = 3;

    const skip = PAGE_SIZE * (Number(page) - 1);

    const categories = await Product.find().distinct("category");

    const products = await Product.find(
      {
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        ...ratingFilter,
      },
      "-reviews"
    )
      .sort(order)
      .skip(skip)
      .limit(PAGE_SIZE)
      .lean();

    const totalCount = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    return {
      products: products as TProduct[],
      totalCount,
      page,
      totalPages,
      categories,
    };
  }
);

const getCategories = cache(async () => {
  await dbConnect();
  const categories = await Product.find().distinct("category");
  return categories;
});

const ProductServices = {
  getFlashSales,
  getFeatured,
  getLatest,
  getById,
  getByQuery,
  getCategories,
};

export default ProductServices;
