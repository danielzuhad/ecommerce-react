import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../images/DummyDataSlider";

const initialState = {
  value: 0,
  length: sliderData.length,
};

export const SliderSlicer = createSlice({
  name: "slicer",
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide: (state, action) => {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide: (state, action) => {
      const slider = action.payload;
      console.log("dot", slider);
      state.value = slider;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = SliderSlicer.actions;
export default SliderSlicer.reducer;
