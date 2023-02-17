import { configureStore } from "@reduxjs/toolkit";
import slicerReducer from "./features/SliderSlider";
import productReducer from "./features/ProductSlicer";

export const store = configureStore({
  reducer: {
    slider: slicerReducer,
    products: productReducer,
  },
});
