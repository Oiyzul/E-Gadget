import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return <div className="max-w-[1280px] mx-auto">
    <Skeleton className="w-2/3 h-2/3" />
    <Skeleton className="w-1/3 h-2/3" />
  </div>;
};

export default LoadingPage;
