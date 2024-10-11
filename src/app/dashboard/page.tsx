import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminDashboard from "./_components/AdminDashboard";
import UserDashboard from "./_components/UserDashboard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/unauthorized");
  }

  return (
    <MaxWidthWrapper>{session.user.isAdmin ? <AdminDashboard /> : <UserDashboard />}</MaxWidthWrapper>
  );
};

export default Dashboard;
