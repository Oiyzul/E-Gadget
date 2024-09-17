import Image from "next/image";
import loadingImg from '@/assets/loading.gif'

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src={loadingImg}
        width={500}
        height={500}
        alt="loading"
        className="w-96 mx-auto"
      />
    </div>
  );
};

export default LoadingPage;
