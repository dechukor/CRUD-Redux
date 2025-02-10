import { ProductCard } from "../components";
import { productListData } from "../data/product.data";

function App() {
  return (
    <>
      <ProductCard {...productListData[0]} />
    </>
  );
}

export default App;
