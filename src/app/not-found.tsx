import Image from "next/image";
import notFoundImg from '@/assets/notFound.gif'

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src={notFoundImg}
        width={1000}
        height={500}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
