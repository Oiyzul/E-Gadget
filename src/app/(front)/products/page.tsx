import { Rating } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductItem from "@/components/products/ProductItem";
import ProductServices from "@/lib/services/productServices";
import Link from "next/link";

type TSearchParams = {
  searchParams: {
    q: string;
    category: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  };
};

type TFilter = {
  c?: string;
  p?: string;
  r?: string;
  s?: string;
  pg?: string;
};
const prices = [
  {
    name: "5000 BDT to 10000 BDT",
    value: "5000-10000",
  },
  {
    name: "10001 BDT to 20000 BDT",
    value: "10001-20000",
  },
  {
    name: "20001 BDT to 30000 BDT",
    value: "20001-30000",
  },
  {
    name: "30001 BDT to 40000 BDT",
    value: "30001-40000",
  },
  {
    name: "40001 BDT to 60000 BDT",
    value: "40001-60000",
  },
  {
    name: "60001 BDT to 200000 BDT",
    value: "60001-200000",
  },
];

const ratings = [5, 4, 3, 2, 1];

const sortOrders = ["newest", "lowest", "highest", "rating"];

const ProductsPage = async ({
  searchParams: {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  },
}: TSearchParams) => {
  const getFilterUrl = ({ c, s, p, r, pg }: TFilter) => {
    const params = { q, category, price, rating, sort, page };
    if (c) params.category = c;
    if (p) params.price = p;
    if (r) params.rating = r;
    if (pg) params.page = pg;
    if (s) params.sort = s;
    return `/products?${new URLSearchParams(params).toString()}`;
  };
  console.log(getFilterUrl);
  const categories = await ProductServices.getCategories();

  const { totalCount, products, totalPages } = await ProductServices.getByQuery(
    {
      q,
      category,
      price,
      rating,
      sort,
      page,
    }
  );
  return (
    <MaxWidthWrapper>
      <div className="grid md:grid-cols-5 md:gap-5">
        <div>
          <div className="text-xl pt-3">Category</div>
          <div>
            <ul>
              <li>
                <Link
                  className={`text-orange-500 ${
                    "all" === category && "text-gray-500"
                  }`}
                  href={getFilterUrl({ c: "all" })}
                >
                  Any
                </Link>
              </li>
              {categories.map((c: string) => (
                <li key={c}>
                  <Link
                    className={`link link-hover ${
                      c === category && "link-primary"
                    }`}
                    href={getFilterUrl({ c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xl pt-3">Price</div>
            <ul>
              <li>
                <Link
                  className={`text-orange-500 hover:text-orange-600 ${
                    "all" === price && "text-gray-500"
                  }`}
                  href={getFilterUrl({ p: "all" })}
                >
                  Any
                </Link>
              </li>
              {prices.map((p) => (
                <li key={p.value}>
                  <Link
                    href={getFilterUrl({ p: p.value })}
                    className={`hover:text-gray-200 ${
                      p.value === price && "text-gray-300"
                    }`}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xl pt-3">Customer Review</div>
            <ul>
              <li>
                <Link
                  href={getFilterUrl({ r: "all" })}
                  className={`text-orange-500 ${
                    "all" === rating && "text-gray-300"
                  }`}
                >
                  Any
                </Link>
              </li>
              {ratings.map((r) => (
                <li key={r}>
                  <Link
                    href={getFilterUrl({ r: `${r}` })}
                    className={`hover:text-orange-500 ${
                      `${r}` === rating && "link-primary"
                    }`}
                  >
                    <Rating rating={r}></Rating>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="flex items-center justify-between  py-4">
            <div className="flex items-center">
              {products.length === 0 ? "No" : totalCount} Results
              {q !== "all" && q !== "" && " : " + q}
              {category !== "all" && " : " + category}
              {price !== "all" && " : Price " + price}
              {rating !== "all" && " : Rating " + rating + " & up"}
              &nbsp;
              {(q !== "all" && q !== "") ||
              category !== "all" ||
              rating !== "all" ||
              price !== "all" ? (
                <Link className="" href="/products">
                  <button className="text-red-500 font-semibold ml-5">
                    Clear
                  </button>
                </Link>
              ) : null}
            </div>
            <div>
              Sort by{" "}
              {sortOrders.map((s) => (
                <Link
                  key={s}
                  className={`mx-2 link link-hover ${
                    sort == s ? "text-orange-500" : ""
                  } `}
                  href={getFilterUrl({ s })}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3  ">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>
            <div className="join">
              {products.length > 0 &&
                Array.from(Array(totalPages).keys()).map((p) => (
                  <Link
                    key={p}
                    className={`join-item btn ${
                      Number(page) === p + 1 ? "btn-active" : ""
                    } `}
                    href={getFilterUrl({ pg: `${p + 1}` })}
                  >
                    {p + 1}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
