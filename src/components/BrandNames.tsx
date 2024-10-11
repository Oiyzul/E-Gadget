const BrandNames = () => {
  return (
    <div className="h-[120px] bg-gray-100 dark:bg-black/70 flex flex-col items-center gap-5 justify-center text-gray-900 dark:text-white italic">
      <div className="whitespace-nowrap overflow-hidden w-full">
        <div className="inline-block animate-marquee">
          <span className="mx-10 text-4xl font-bold">Samsung</span>
          <span className="mx-10 text-4xl font-bold">Xiomi</span>
          <span className="mx-10 text-4xl font-bold">Oppo</span>
          <span className="mx-10 text-4xl font-bold">Realme</span>
          <span className="mx-10 text-4xl font-bold">Huawei</span>
          <span className="mx-10 text-4xl font-bold">One Plus</span>
          <span className="mx-10 text-4xl font-bold">iPhone</span>
          <span className="mx-10 text-4xl font-bold">Pixel</span>
          {/* duplicate */}
          <span className="mx-10 text-4xl font-bold">Samsung</span>
          <span className="mx-10 text-4xl font-bold">Xiomi</span>
          <span className="mx-10 text-4xl font-bold">Oppo</span>
          <span className="mx-10 text-4xl font-bold">Realme</span>
          <span className="mx-10 text-4xl font-bold">Huawei</span>
          <span className="mx-10 text-4xl font-bold">One Plus</span>
          <span className="mx-10 text-4xl font-bold">iPhone</span>
          <span className="mx-10 text-4xl font-bold">Pixel</span>
        </div>
      </div>
    </div>
  );
};

export default BrandNames;
