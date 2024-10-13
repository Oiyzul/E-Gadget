import { Banner, BrandNames, Facility, TopBrands } from "@/components";
import AnimatedTitle from "@/components/AnimatedTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FlashSaleItem from "@/components/products/FlashSaleItem";
import ProductItem from "@/components/products/ProductItem";
import ProductServices from "@/lib/services/productServices";
import { convertDocToObj } from "@/lib/utils";
import { Metadata } from "next";
import { TProduct } from "../../../types";

export const metadata: Metadata = {
  title: "Home | E-Gadget",
  description: "Discover our latest products and get ready to shop",
};

const HomePage = async () => {
  const flashSaleProducts = await ProductServices.getFlashSales();
  const featuredProducts = await ProductServices.getFeatured();
  const latestProducts = await ProductServices.getLatest();
  // let flashSaleProducts,
  //   featuredProducts,
  //   latestProducts = [];

  return (
    <main>
      <Banner />
      <MaxWidthWrapper className="">
        <section className="mt-10">
          <AnimatedTitle title="Best Deals" link="/flash-sale" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 sm:gap-5 md:gap-2 lg:gap-5 xl:gap-12">
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
          <AnimatedTitle
            title="Our Latest Collection"
            link="/products?sort=newest"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 sm:gap-5 md:gap-2 lg:gap-5 xl:gap-12">
            {latestProducts.length > 0 &&
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

        <section>
          <TopBrands />
        </section>

        <section className="section">
          <AnimatedTitle
            title="Our Most Popular"
            link="/products?sort=rating"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 sm:gap-5 md:gap-2 lg:gap-5 xl:gap-12">
            {featuredProducts?.length > 0 &&
              featuredProducts?.map((product: TProduct) => (
                <ProductItem
                  key={`popular-${product._id}`}
                  product={convertDocToObj(product)}
                />
              ))}
          </div>
        </section>
      </MaxWidthWrapper>
      <Facility />
      <BrandNames />
    </main>
  );
};

export default HomePage;
