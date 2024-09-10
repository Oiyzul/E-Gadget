import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductItem from "@/components/products/ProductItem";
import ProductServices from "@/lib/services/productServices";
import { TProduct } from "../../../types";
import { convertDocToObj } from "@/lib/utils";
import { Banner, TopBrands } from "@/components";
import FlashSaleItem from "@/components/products/FlashSaleItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigRight, ArrowRightLeft } from "lucide-react";

const HomePage = async () => {
  const flashSaleProducts = await ProductServices.getFlashSales();
  const featutedProducts = await ProductServices.getFeatured();
  const latestProducts = await ProductServices.getLatest();

  return (
    <main>
      <Banner />
      <MaxWidthWrapper className="">
        <section className="section">
          <div className="mb-10 flex justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500">
              Flash Sale
            </h1>
            <Button
              asChild
              className="bg-gray-900 rounded-full hover:bg-gray-950 px-5"
            >
              <Link href="/flash-sale" className="flex gap-2">
                View All <ArrowBigRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {flashSaleProducts.map((product: TProduct) => (
              <FlashSaleItem
                key={`flashsale-${product._id}`}
                product={convertDocToObj(product)}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <TopBrands />
        </section>

        <section className="mt-10 md:mt-20 min-h-screen grid place-content-center">
          <div className="text-center">
            <p className="text-red-500 font-semibold">Grab it now.</p>
            <h2 className="text-5xl font-semibold">Our Exclusive Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featutedProducts.length > 1 &&
              featutedProducts.map((product: TProduct) => (
                <ProductItem
                  key={`featured-${product._id}`}
                  product={convertDocToObj(product)}
                />
              ))}
          </div>
        </section>

        <h2>Latest</h2>
        {latestProducts.length > 1 &&
          latestProducts.map((product: TProduct) => (
            <ProductItem
              key={`featured-${product._id}`}
              product={convertDocToObj(product)}
            />
          ))}
        <button>Visit our store</button>
      </MaxWidthWrapper>
    </main>
  );
};

export default HomePage;