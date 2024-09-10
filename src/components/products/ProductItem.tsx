import Image from "next/image";
import { TProduct } from "../../../types";
import Link from "next/link";

const ProductItem = ({ product }: { product: TProduct }) => {
  const { title, images, brand, model, features, price } = product;

  return (
    <div className="">
      <div className="relative w-[300px] h-[250px]">
        <figure>
          <Image src={images[0]} alt={title} fill />
        </figure>
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          {brand} {model}
        </p>
        <p>Price: ${price}</p>
        {features.slice(0, 2).map((feature: string) => (
          <div className="flex flex-col gap-1">
            <p>{feature}</p>
          </div>
        ))}
        <Link href={`/products/${product._id}`}>
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
