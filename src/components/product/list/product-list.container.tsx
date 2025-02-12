import { FC, useState, useEffect } from "react";
import { ProductModel } from "../../../types/product.model";
import { fetchProductsApi } from "../../../services";
import { ProductList } from "./product-list.component";

export const ProductListContainer: FC = () => {
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

  return (
    <>
      {error && <p>{error}</p>}
      {loading ? <p>Loading...</p> : <ProductList products={products} />}
    </>
  );
};
