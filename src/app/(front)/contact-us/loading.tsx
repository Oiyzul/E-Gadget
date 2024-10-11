import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-4 flex flex-col items-center justify-center space-y-5 h-full">
      {/* <Skeleton className="w-full h-12" /> */}
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <Skeleton className="w-full md:w-1/2 h-[400px]" />
        <Skeleton className="w-full md:w-1/2 h-[400px]" />
      </div>
    </div>
  );
};

export default LoadingPage;
