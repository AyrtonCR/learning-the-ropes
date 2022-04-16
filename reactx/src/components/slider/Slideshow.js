import React, { useState } from "react";
import "./Slideshow.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {};

  return (
    <div className="slide-show-container">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              className="slide-show-image"
              alt="slider-pic"
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpeg`}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}

// /* <div className="slide-show-items">
//         <div className="slide-show-item-container">
//           <img
//             className="slide-show-item-one"
//             src={require("./banner.jpeg")}
//             alt="banner"
//           />
//         </div>
//         <div className="slide-show-item-container">
//           <img
//             className="slide-show-item-two"
//             src={require("./ittakes3.jpeg")}
//             alt="banner"
//           />
//         </div>
//         <div className="slide-show-item-container">
//           <img
//             className="slide-show-item-three"
//             src={require("./matewareware.jpeg")}
//             alt="matewareware"
//           />
//         </div>
//       </div>
