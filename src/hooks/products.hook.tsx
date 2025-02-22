import { useState, useEffect } from "react";
import { fetchProductsApi } from "../services"; // Загрузка данных с сервера
import { useDispatch, useSelector } from "react-redux";
import { setProductsActions } from "../store/product/product.slice";
import { selectProducts } from "../store/product/product.selectors";
// import { productListData } from "../data/product.data"; // Загрузка данных из локального хранилища

export const useProducts = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  async function fetchProducts() {
    setLoading(true);
    setError("");
    try {
      const response = await fetchProductsApi(); // Загрузка данных с сервера
      dispatch(setProductsActions(response.data)); // Загрузка данных с сервера
      // dispatch(setProductsActions(productListData)); // Загрузка данных из локального хранилища
    } catch (error) {
      setError(`Something went wrong! Error: ${error}`);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading };
};
