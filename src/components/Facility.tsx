import { Package, Shield, Undo2 } from "lucide-react";

const Facility = () => {
  return (
    <section className="mt-10 min-h-[20vh] border-t-2">
      {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="w-full flex-1 flex flex-col items-center gap-5 p-10 rounded-xl bg-gray-50 dark:bg-black">
          <Package size={40} />
          <h3 className="text-xl font-semibold">Free delivery</h3>
          <p className="text-light w-[80%]">
            And free returns. See checkout for delivery dates.
          </p>
        </div>
        <div className="w-full flex-1 flex flex-col items-center gap-5 p-10 rounded-xl bg-gray-50 dark:bg-black">
          <CircleDollarSign size={40} />
          <h3 className="text-xl font-semibold">Pay monthly at 0% APR</h3>
          <p className="text-light w-[80%]">
            Choose to checkout with your credit card monthly installments.
          </p>
        </div>
        <div className="w-full flex-1 flex flex-col items-center gap-5 p-10 rounded-xl bg-gray-50 dark:bg-black">
          <BookHeart size={40} />
          <h3 className="text-xl font-semibold">Personalize it</h3>
          <p className="text-light w-[80%]">
            Engrave your device with your name or personal note.
          </p>
        </div>
      </div> */}
      <div className="h-full flex flex-col sm:flex-row">
        <div className="px-4 flex-1 h-full min-h-[20vh] flex items-center gap-2 border-b-2 sm:border-r-2">
          <Package size={40} className="-mt-4" />
          <h3 className="">
            <span className="text-xl font-bold">Free Shipping </span>
            <span className="text-gray-500 dark:text-gray-300">
              Enjoy free shipping on orders 30000 taka and over
            </span>
          </h3>
        </div>
        <div className="px-4 flex-1 h-full min-h-[20vh] flex items-center gap-2 border-b-2 sm:border-r-2">
          <Undo2 size={40} />
          <h3 className="">
            <span className="text-xl font-bold">Free Return </span>
            <span className="text-gray-500 dark:text-gray-300">
              30 days money back gurantee
            </span>
          </h3>
        </div>
        <div className="px-4 flex-1 h-full min-h-[20vh] flex items-center gap-2 border-b-2 sm:border-r-2">
          <Shield size={40} />
          <h3 className="">
            <span className="text-xl font-bold">Secure Payment </span>
            <span className="text-gray-500 dark:text-gray-300">
              100% secure payment
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Facility;
