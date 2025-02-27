import { createSlice } from "@reduxjs/toolkit";
import { ProductStateModel } from "../../models/state";
import { BasketModel } from "../../types";

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
    removeProductActions: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    addProductInBasket: (state, action) => {
      const newItem: BasketModel = {
        id: action.payload,
      };
      state.basket = [newItem, ...state.basket];
    },
    removeProductFromBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setProductsActions,
  addProductActions,
  editProductActions,
  removeProductActions,
  addProductInBasket,
  removeProductFromBasket,
} = productSlice.actions;
export default productSlice.reducer;
