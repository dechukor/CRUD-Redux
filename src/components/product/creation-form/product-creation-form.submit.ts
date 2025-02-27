import { createProductApi, editProductApi } from "../../../services";
import { ProductModel } from "../../../types";

export const editSubmit = (product: ProductModel) => {
  editProductApi(product);
};

export const createSubmit = (product: ProductModel) => {
  createProductApi(product);
};
