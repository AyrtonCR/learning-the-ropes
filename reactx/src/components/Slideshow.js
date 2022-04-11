import React from "react";
import "./Slideshow.css";

export default function Slideshow() {
  return (
    <div className="slide-show-container">
      <div className="slide-show-items">
        <div className="slide-show-item-container">
          <img
            className="slide-show-item-one"
            src={require("../images/banner.jpeg")}
            alt="banner"
          />
        </div>
        <div className="slide-show-item-conatiner">
          <img
            className="slide-show-item-two"
            src={require("../images/ittakes3.jpeg")}
            alt="banner"
          />
        </div>
        <div className="slide-show-item-container">
          <img
            className="slide-show-item-three"
            src={require("../images/matewareware.jpeg")}
            alt="matewareware"
          />
        </div>
      </div>
    </div>
  );
}
