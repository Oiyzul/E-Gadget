import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Reviews from "@/components/review/Reviews";
import ProductServices from "@/lib/services/productServices";
import { convertDocToObj } from "@/lib/utils";
import ProductDetails from "./ProductDetails";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const product = await ProductServices.getById(params.id);
  console.log(product);

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
