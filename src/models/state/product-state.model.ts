import { BasketModel, ProductModel } from "../../types";

export interface ProductStateModel {
  products: ProductModel[];
  basket: BasketModel[];
}
