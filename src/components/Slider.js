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
      <div className="flex justify-center">
        <div className="relative pb-4 w-full ">
          {sliderData.map((data, index) => {
            return (
              <div key={data.id} className={parseInt(data.id) === sliderIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
                <div>{parseInt(data.id) === sliderIndex && <img className="max-h-[750px] w-full object-cover object-top" src={data.img} alt="productSlide" />}</div>
              </div>
            );
          })}
          <div className="flex absolute bottom-[80px] left-[40%]">
            {sliderData.map((dot, index) => {
              return (
                <div className="mr-4" key={index}>
                  <div
                    className={index === sliderIndex ? "bg-green-500 rounded-full p-3 cursor-pointer" : "bg-black rounded-full p-3 cursor-pointer"}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(dotSlide(index));
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
