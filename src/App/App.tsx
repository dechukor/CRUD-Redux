import { ProductListContainer } from "../components";
// import { productListData } from "../data/product.data";
import { store } from "../store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ProductListContainer />
    </Provider>
  );
};
