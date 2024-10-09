import DashboardNav from "./_components/DashboardNav";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-2 md:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-6 md:col-span-7">
          <DashboardNav />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
}
