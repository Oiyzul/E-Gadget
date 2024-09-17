import { auth } from "@/lib/auth";
import OrdersTable from "../_components/OrdersTable";
import UserNav from "../_components/UserNav";
import { redirect } from "next/navigation";

const UserDashboard = async() => {
  const session = await auth();
  if (!session || session.user.isAdmin) {
    return redirect("/unauthorized");
  }

  return <div>
    <UserNav />
    <OrdersTable />
  </div>;
};

export default UserDashboard;
