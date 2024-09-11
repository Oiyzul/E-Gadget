import { Banner, BrandNames, TopBrands } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FlashSaleItem from "@/components/products/FlashSaleItem";
import ProductItem from "@/components/products/ProductItem";
import { Button } from "@/components/ui/button";
import { convertDocToObj } from "@/lib/utils";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { TProduct } from "../../../types";

const HomePage = async () => {
  // const flashSaleProducts = await ProductServices.getFlashSales() 
  // const featuredProducts = await ProductServices.getFeatured() 
  // const latestProducts = await ProductServices.getLatest()
 let flashSaleProducts, featuredProducts, latestProducts = []
  return (
    <main>
      <Banner />
      <MaxWidthWrapper className="mt-20">
        <section className="section">
          <div className="mb-10 flex justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500 dark:text-white">Flash Sale</h1>
            <Button
              asChild
              className="bg-gray-900 rounded-full hover:bg-gray-950 px-5 text-white"
            >
              <Link href="/flash-sale" className="flex gap-2">
                View All <ArrowBigRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {flashSaleProducts?.map((product: TProduct) => (
              <FlashSaleItem
                key={`flashsale-${product._id}`}
                product={convertDocToObj(product)}
              />
            ))}
          </div>
        </section>
        {/* latest product */}
        <section className="section">
        <div className="mb-10 flex justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500 dark:text-white">Our Latest Collection</h1>
            <Button
              asChild
              className="bg-gray-900 rounded-full hover:bg-gray-950 px-5 text-white"
            >
              <Link href="/products" className="flex gap-2">
                View All <ArrowBigRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
            {latestProducts.length > 1 &&
              latestProducts?.map((product: TProduct) => (
                <ProductItem
                  key={`latest-${product._id}`}
                  product={convertDocToObj(product)}
                />
              ))}
          </div>
          {/* <Button className="mt-10 bg-gray-900 hover:bg-gray-950 dark:text-white">
            <Link href={"/products"}>Visit Our Store</Link>
          </Button> */}
        </section>

        <section className="section">
          <TopBrands />
        </section>

        <section className="mt-10 md:mt-20 min-h-screen grid place-content-center">
        <div className="mb-10 flex justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500 dark:text-white">Our Most Popular</h1>
            <Button
              asChild
              className="bg-gray-900 rounded-full hover:bg-gray-950 px-5 text-white"
            >
              <Link href="/flash-sale" className="flex gap-2">
                View All <ArrowBigRight />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {featuredProducts?.length > 1 &&
              featutedProducts?.map((product: TProduct) => (
                <ProductItem
                  key={`popular-${product._id}`}
                  product={convertDocToObj(product)}
                />
              ))}
          </div>
        </section>
      </MaxWidthWrapper>
      <BrandNames />
    </main>
  );
};

export default HomePage;
