import { configureStore } from "@reduxjs/toolkit";
import slicerReducer from "./features/SliderSlider";

export const store = configureStore({
  reducer: {
    slider: slicerReducer,
  },
});
