import { useState, useEffect } from "react";
import { fetchProductsApi } from "./services";
import { useDispatch, useSelector } from "react-redux";
import { setProductsActions } from "./store/product/product.slice";
import { selectProducts } from "./store/product/product.selectors";

export const useProducts = () => {
  // const [products, setProducts] = useState<ProductModel[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  async function fetchProducts() {
    setLoading(true);
    setError("");
    try {
      const response = await fetchProductsApi();
      dispatch(setProductsActions(response.data));
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading };
};
