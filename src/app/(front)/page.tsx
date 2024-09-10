import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductItem from "@/components/products/ProductItem";
import ProductServices from "@/lib/services/productServices";
import { TProduct } from "../../../types";
import { convertDocToObj } from "@/lib/utils";
import { Banner } from "@/components";

const HomePage = async () => {
  const featutedProducts = await ProductServices.getFeatured();
  const latestProducts = await ProductServices.getLatest();

  return (
    <main>
      <MaxWidthWrapper className="">
        <h1 className="text-4xl font-semibold text-center">Welcome to E-Mobby</h1>
        <p className="text-center font-semibold mb-7">Your one-stop shop for all your electronic needs.</p>

        <Banner />

        <h2>Featured</h2>
        {featutedProducts.length > 1 &&
          featutedProducts.map((product: TProduct) => (
            <ProductItem
              key={`featured-${product._id}`}
              product={convertDocToObj(product)}
            />
          ))}
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
