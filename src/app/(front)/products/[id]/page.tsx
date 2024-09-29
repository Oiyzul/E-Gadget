import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductServices from "@/lib/services/productServices";
import { convertDocToObj } from "@/lib/utils";
import ProductDetails from "./ProductDetails";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await ProductServices.getById(params.id);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const product = await ProductServices.getById(params.id);

  return (
    <MaxWidthWrapper className="">
      {!product ? (
        <div className="">Loading...</div>
      ) : (
        <ProductDetails
          key={`details-${product._id}`}
          product={convertDocToObj(product)}
        />
      )}
    </MaxWidthWrapper>
  );
};

export default ProductDetailsPage;
