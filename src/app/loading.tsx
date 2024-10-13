import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="w-[90%] h-screen mx-auto my-10 flex flex-col space-y-4">
      <Skeleton className="w-full h-16" />
      <Skeleton className="w-full h-[70%] mt-2" />
      <div className="space-y-2 flex items-center justify-between">
        <Skeleton className="w-full h-16" />
      </div>
    </div>
  );
};

export default LoadingPage;
