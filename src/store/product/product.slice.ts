import { createSlice } from "@reduxjs/toolkit";
import { ProductStateModel } from "../../models/state";
// import { ProductModel } from "../../types";

const initialState: ProductStateModel = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsActions: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsActions } = productSlice.actions;
export default productSlice.reducer;
