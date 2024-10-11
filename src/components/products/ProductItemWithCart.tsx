import Image from "next/image";
import { TProduct } from "../../../types";
import Link from "next/link";
import Rating from "../Rating";
import AddToCart from "../cart/AddToCart";

const ProductItemWithCart = ({ product }: { product: TProduct }) => {
  const {
    _id,
    name,
    images,
    model,
    features,
    price,
    rating,
    countInStock,
    discount,
  } = product;

  return (
    <div
      key={`product-item-${_id}`}
      className="w-full mx-auto bg-gray-900 text-white rounded-lg"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <div className="relative w-full mx-auto h-[36vh] sm:h-[30vh] md:h-[30vh] lg:h-[30vh] xl:h-[36vh]">
          <Image
            src={images[0]}
            alt="Card Image"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw"
            className="object-cover"
          />
        </div>
        <div className="bg-gray-900 w-fit py-2 rounded-full px-4 absolute top-4 left-4">
          <p className="text-white font-semibold">{discount || 0} % off</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <h3 className="text-center text-lg font-semibold">{name}</h3>
          <p>Model: {model}</p>
          <p>Price: {price} BDT</p>
          <Rating rating={rating} />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>

          {features.slice(0, 4).map((feature) => (
            <p key={feature.substring(0, 10)} className="text-white text-left">
              {feature}
            </p>
          ))}
          <Link href={`/products/${_id}`}>
            <button className="mt-4 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300">
              See More
            </button>
          </Link>
        </div>
        <div className="w-full text-center mx-auto relative z-10 mb-2 flex items-center justify-center">
          {countInStock !== 0 ? (
            <div>
              <AddToCart product={product} />
            </div>
          ) : (
            <div className="text-red-500 font-bold">
              <p>Out of Stock</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItemWithCart;
