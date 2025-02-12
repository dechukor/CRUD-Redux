import { useState, useEffect } from "react";
import { ProductModel } from "./types";
import { fetchProductsApi } from "./services";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    setError("");
    try {
      const response = await fetchProductsApi();
      setProducts(response.data);
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [setProducts]);

  return { products, error, loading };
};
