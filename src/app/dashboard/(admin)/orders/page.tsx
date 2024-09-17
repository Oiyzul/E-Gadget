import { auth } from "@/lib/auth";
import OrdersTable from "../../_components/OrdersTable";
import { redirect } from "next/navigation";

const OrdersPage = async () => {
  const session = await auth();
  if (!session || !session.user.isAdmin) {
    return redirect("/unauthorized");
  }

  return (
    <div>
      <OrdersTable />
    </div>
  );
};

export default OrdersPage;
