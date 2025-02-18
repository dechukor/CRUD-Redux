import axios, { AxiosResponse } from "axios";
import { PRODUCTS_URL } from "../constants";
import { ProductModel } from "../types";

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
  return axios.get(PRODUCTS_URL);
};

console.log(fetchProductsApi().then());
