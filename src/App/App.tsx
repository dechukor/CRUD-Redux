import { ProductListContainer } from "../components";
import { store } from "../store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ProductListContainer />
    </Provider>
  );
};
