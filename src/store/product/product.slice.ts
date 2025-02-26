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
    editProductActions: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
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
  editProductActions,
  addProductInBasket,
  removeProductFromBasket,
} = productSlice.actions;
export default productSlice.reducer;
