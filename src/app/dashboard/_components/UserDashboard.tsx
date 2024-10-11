"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  useGetOrdersByUserIdQuery
} from "@/redux/features/order/orderApi";
import { useSession } from "next-auth/react";
import { TOrder } from "../../../../types";
import RecentSales from "./RecentSales";

const UserDashboard = () => {
  const { data: session } = useSession();

  const { data: orders = [], isLoading } = useGetOrdersByUserIdQuery(
    session?.user?._id
  );

  if (isLoading) return <div>Loading...</div>;

  if (!orders?.data?.length) return <div>No orders found.</div>;

  const delivered = orders.data.filter((order: TOrder) => order.isDelivered);

  const paid = orders.data.filter((order: TOrder) => order.isPaid);

  const unpaid = orders.data.filter((order: TOrder) => !order.isPaid);

  return (
    <div className="flex flex-col gap-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orders.data.length}</div>
            <p className="text-xs text-muted-foreground">
              {/* +20.1% from last month */}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{paid.length}</div>
            <p className="text-xs text-muted-foreground">
              {/* +8.1% from last month */}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unpaid</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{unpaid.length}</div>
            <p className="text-xs text-muted-foreground">
              {/* +8.1% from last month */}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{delivered.length}</div>
            <p className="text-xs text-muted-foreground">
              {/* +19% from last month */}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="">
        {/* <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card> */}
        <Card className="">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              You made {paid.length} orders this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales data={paid} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
