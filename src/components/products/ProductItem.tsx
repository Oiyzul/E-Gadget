import Image from "next/image";
import { TProduct } from "../../../types";
import Link from "next/link";
import Rating from "../Rating";

const ProductItem = ({ product }: { product: TProduct }) => {
  const { _id, title, images, model, features, price, rating } = product;
  let discount = 10;
  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-lg">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[250px]">
          <Image
            src={images[0]}
            alt="Card Image"
            fill
            className="object-cover pt-0.5"
          />
        </div>
        <div className="bg-gray-900 w-fit py-2 rounded-full px-4 absolute top-4 left-4">
          <p className="text-white font-semibold">{discount || 0} % off</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <h3 className="text-center text-lg font-semibold">{title}</h3>
          <p>Model: {model}</p>
          <p>Price: {price} BDT</p>
          <Rating rating={rating} />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>

          {features.slice(0, 4).map((feature) => (
            <p className="text-white text-left">{feature}</p>
          ))}
          <Link href={`/products/${_id}`}>
            <button className="mt-4 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
