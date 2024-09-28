import Image from "next/image";
import Link from "next/link";
import { TProductProps } from "../../../types";
import Rating from "../Rating";

const FlashSaleItem = ({ product }: TProductProps) => {
  const { _id, name, images, features, rating, discount } = product;
 
  return (
    <div key={`flash-item-${_id}`} className="max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <Image
          src={images[0]}
          alt="Card Image"
          layout="responsive"
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <div className="bg-yellow-500 w-fit py-2 rounded-full px-4 absolute top-4 left-4">
          <p className="text-white font-semibold">{discount || 0} % off</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-center text-lg font-semibold">{name}</h3>
          <Rating rating={rating} />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>

          {features.slice(0, 4).map((feature) => (
            <p key={feature.substring(0,10)} className="text-white text-left">{feature}</p>
          ))}
          <Link href={`/products/${_id}`}>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItem;
