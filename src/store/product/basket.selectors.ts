import { RootState } from "../store";
import { selectProductState } from "./product.selectors";

export const selectBasket = (state: RootState) =>
  selectProductState(state).basket;
