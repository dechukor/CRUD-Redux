import { ProductList } from "../components";
import { productListData } from "../data/product.data";

export function App() {
  return <ProductList productListData={productListData} />;
}
