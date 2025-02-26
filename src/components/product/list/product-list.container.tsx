import { FC, useState } from "react";
import { ProductList } from "./product-list.component";
import { useProducts } from "../../../hooks/products.hook";
import { ProductCreationContainer } from "../creation-container";
import { Header } from "../../header";
import { Basket } from "../../basket";

export const ProductListContainer: FC = () => {
  const { products, loading, error } = useProducts();
  const [visibleBasket, setVisibleBasket] = useState(false);

  return (
    <>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header onOpenBasket={() => setVisibleBasket(true)} />
          <ProductList products={products} />
          <ProductCreationContainer />

          {visibleBasket && (
            <Basket
              products={products}
              onCloseBasket={() => setVisibleBasket(false)}
            />
          )}
        </>
      )}
    </>
  );
};
