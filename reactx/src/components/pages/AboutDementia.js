import React from "react";
import about1 from "./AboutImages/about1.jpg";
import about2 from "./AboutImages/about2.jpg";
import about3 from "./AboutImages/about3.jpg";
import about4 from "./AboutImages/about4.png";

export default function AboutDementia() {
  return (
    <div className="about-page-container">
      <div className="about-page-content-one">
        <h1>About Dementia</h1>

        <img className="about-image" src={about1} alt="" />
        <h3>What is dementia?</h3>
        <p>
          Dementia is not one specific disease, but an umbrella term that is
          used to describe over 70...
        </p>
        <a href className="read-more-button">
          <strong>Read More</strong>
        </a>
      </div>

      <div className="about-page-content-two">
        <h1>About Dementia</h1>

        <img className="about-image" src={about2} alt="" />
        <h3>Signs of dementia</h3>
        <p>
          Poor memory is one of the most common symptoms of dementia. This can
          include having difficulty...
        </p>
        <a href className="read-more-button">
          <strong>Read More</strong>
        </a>
      </div>

      <div className="about-page-content-three">
        <h1>About Dementia</h1>

        <img className="about-image" src={about3} alt="" />
        <h3>Types of dementia</h3>
        <p>
          Alzheimer's disease is the most common cause of dementia. It accounts
          for about 50-80% of dementia...
        </p>
        <a href className="read-more-button">
          <strong>Read More</strong>
        </a>
      </div>

      <div className="about-page-content-four">
        <h1>About Dementia</h1>

        <img className="about-image" src={about4} alt="" />
        <h3>Reducing the risk</h3>
        <p>
          There is no cure for dementia, yet. But there are ways to reduce your
          risk of developing dementia...
        </p>
        <a href className="read-more-button">
          <strong>Read More</strong>
        </a>
      </div>
    </div>
  );
}
