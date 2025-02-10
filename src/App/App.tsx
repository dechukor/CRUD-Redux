import { ProductCard } from "../components";
import { productListData } from "../data/product.data";

export function App() {
  return (
    <>
      {productListData.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </>
  );
}
