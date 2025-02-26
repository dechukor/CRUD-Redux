import { createSlice } from "@reduxjs/toolkit";
import { ProductStateModel } from "../../models/state";
// import { ProductModel } from "../../types";

const initialState: ProductStateModel = {
  products: [],
  basket: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsActions: (state, action) => {
      state.products = action.payload;
    },
    addProductActions: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    addProductInBasket: (state, action) => {
      state.basket = [action.payload, ...state.basket];
    },
    removeProductFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  setProductsActions,
  addProductActions,
  addProductInBasket,
  removeProductFromBasket,
} = productSlice.actions;
export default productSlice.reducer;
