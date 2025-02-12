import { FC } from "react";
import { ProductList } from "./product-list.component";
import { useProducts } from "../../../products.hook";

export const ProductListContainer: FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      {loading ? <p>Loading...</p> : <ProductList products={products} />}
    </>
  );
};
