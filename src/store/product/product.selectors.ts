import { ProductStateModel } from "../../models/state";
import { RootState } from "../store";

export const selectProductState: (state: RootState) => ProductStateModel = (
  state: RootState
) => state.product;

export const selectProducts = (state: RootState) =>
  selectProductState(state).products;
