import DashboardNav from "./_components/DashboardNav";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-6">
        <Sidebar />
        <div className="col-span-5 p-4">
          <DashboardNav />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
