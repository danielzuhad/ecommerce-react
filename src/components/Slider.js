import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../features/SliderSlider";
import { useSelector, useDispatch } from "react-redux";

import { sliderData } from "../images/DummyDataSlider";

export const Slider = () => {
  const sliderIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", sliderIndex);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="relative pb-4">
        {sliderData.map((data, index) => {
          return (
            <div key={data.id} className={parseInt(data.id) === sliderIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
              <div>{parseInt(data.id) === sliderIndex && <img className="h-[850px] w-max" src={data.img} alt="productSlide" />}</div>
            </div>
          );
        })}
      </div>
      <button onClick={() => dispatch(nextSlide(sliderIndex + 1))}>Next</button>
      <button onClick={() => dispatch(prevSlide(sliderIndex - 1))}>Previous</button>
    </div>
  );
};
