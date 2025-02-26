import axios, { AxiosResponse } from "axios";
import { PRODUCTS_URL } from "../constants";
import { BasketModel, ProductModel } from "../types";
import {
  addProductActions,
  addProductInBasket,
  removeProductFromBasket,
} from "../store/product/product.slice";
import { store } from "../store";

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
  return axios.get(PRODUCTS_URL);
};

export const createProductApi = (product: Partial<ProductModel>) => {
  store.dispatch(addProductActions(product));
};

export const addBasketApi = (id: BasketModel) => {
  store.dispatch(addProductInBasket(id));
};

export const removeBasketApi = (id: BasketModel) => {
  store.dispatch(removeProductFromBasket(id));
};
