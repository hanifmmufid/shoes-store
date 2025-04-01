import { Product } from "@/types";
import ProductCard from "./product-card";

/**
 * Renders a list of products in a grid layout.
 *
 * @param {Object} props - The properties object.
 * @param {Product[]} props.data - An array of product objects to be displayed.
 * @param {string} [props.title] - An optional title for the product list.
 * @param {number} [props.limit] - An optional limit to the number of products displayed.
 *
 * @returns {JSX.Element} A JSX element representing the product list, either as a grid of ProductCards or a message indicating no products were found.
 */

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitData.map((product: Product) => (
            // <div key={product.slug}>{product.name}</div>
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
