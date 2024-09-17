import { auth } from "@/lib/auth";
import ProductsTable from "../../_components/ProductsTable";
import { redirect } from "next/navigation";

const ProductsPage = async() => {
  const session = await auth();
  if (!session || !session.user.isAdmin) {
    return redirect("/unauthorized");
  }

  return (
    <div>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
