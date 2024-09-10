import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductItem from "@/components/products/ProductItem";
import ProductServices from "@/lib/services/productServices";
import { TProduct } from "../../../types";
import { convertDocToObj } from "@/lib/utils";

const HomePage = async () => {
  const featutedProducts = await ProductServices.getFeatured();
  const latestProducts = await ProductServices.getLatest();

  return (
    <main>
      <MaxWidthWrapper>
        <h1>Welcome to E-Mobby</h1>
        <p>Your one-stop shop for all your electronic needs.</p>
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
