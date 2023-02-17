import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products.push(payload);
    },
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
