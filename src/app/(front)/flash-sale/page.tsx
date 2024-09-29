import { CountdownTimer } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FlashSaleItem from "@/components/products/FlashSaleItem";
import ProductServices from "@/lib/services/productServices";

export const metadata = {
  title: "Flash Sales - Your Online Store",
  description: "Check out our latest flash sale products at our store.",
  keywords: ["flash sale", "electronics", "clothing", "accessories"],
};

const FlashSalePage = async () => {
  const products = await ProductServices.getFlashSales();

  return (
    <section className="section">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center mb-5">Flash Sales</h2>
        <div className="flex items-center justify-center mb-5">
          <CountdownTimer targetDate="2024-09-30" targetTime="10:00" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.length > 0 &&
            products.map((product) => (
              <FlashSaleItem
                key={`flash-sales-${product._id}`}
                product={product}
              />
            ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FlashSalePage;
