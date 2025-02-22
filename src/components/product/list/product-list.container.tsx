import { FC } from "react";
import { ProductList } from "./product-list.component";
import { useProducts } from "../../../hooks/products.hook";
import { ProductCreationContainer } from "../creation-container";

export const ProductListContainer: FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProductList products={products} />
          <ProductCreationContainer />
        </>
      )}
    </>
  );
};
