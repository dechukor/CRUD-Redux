import axios, { AxiosResponse } from "axios";
import { PRODUCTS_URL } from "../constants";
import { ProductModel } from "../types";
import { addProductActions } from "../store/product/product.slice";
import { store } from "../store";

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
  return axios.get(PRODUCTS_URL);
};

export const createProductApi = (product: Partial<ProductModel>) => {
  store.dispatch(addProductActions(product));
};
