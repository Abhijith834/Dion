import React from "react";
import "./Hero.css";
import leftArrow from "../../svg/Left arrow.svg";
import rightArrow from "../../svg/Right arrow.svg";

function Hero({ introHeading, heroText1, heroText2, heroImage, startBuildingButton }) {
  return (
    <div className="Hero">
      <div className="intro_heading">
        {introHeading}
      </div>
      <div className="intro_text">
        <p className="hero_text_1">
          {heroText1}
        </p>
        <p className="hero_text_2">
          {heroText2}
        </p>
      </div>
      <div className="hero_button">
        {startBuildingButton}
      </div>
      <div className="arrows">
        <div className="arrow_left">
          <img
            src={leftArrow}
            alt="Left arrow"
            className="overlay-svg svg1"
          />
        </div>
        <div className="arrow_right">
          <img
            src={rightArrow}
            alt="Right arrow"
            className="overlay-svg svg2"
          />
        </div>
      </div>
      <div className="image">
        {heroImage}
      </div>
    </div>
  );
}

export default Hero;
