import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import OrdersTable from "../_components/OrdersTable";

const UserDashboard = async () => {
  const session = await auth();
  if (!session || session.user.isAdmin) {
    return redirect("/unauthorized");
  }

  return (
    <div>
      <OrdersTable />
    </div>
  );
};

export default UserDashboard;
