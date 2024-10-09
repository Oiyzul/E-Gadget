import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminDashboard from "./_components/AdminDashboard";
import UserDashboard from "./_components/UserDashboard";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/unauthorized");
  }

  return (
    <div>{session.user.isAdmin ? <AdminDashboard /> : <UserDashboard />}</div>
  );
};

export default Dashboard;
