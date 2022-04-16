import React from "react";
import "./Slideshow.css";
import leftArrow from "./icons/leftArrow.jpeg";
import rightArrow from "./icons/rightArrow.jpeg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        className="button-styler"
        src={direction === "next" ? rightArrow : leftArrow}
      />
    </button>
  );
}
