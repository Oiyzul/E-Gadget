import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ className, children }: TProps) => {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto p-4", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
