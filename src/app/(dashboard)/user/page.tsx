
import OrdersTable from "./_components/OrdersTable";
import UserNav from "./_components/UserNav";

const UserDashboardPage = async () => {
  return (
    <>
      <UserNav />
      <OrdersTable />
    </>
  );
};

export default UserDashboardPage;
