import React from "react";
import "./Section1.css";
import leftArrow from "../../svg/Left arrow.svg";
import rightArrow from "../../svg/Right arrow.svg";
import hero_image from "../../images/homepage.webp";
import Start_building from "../Buttons/Start_building/Start_building";

function Section1() {
  return (
    <div className="section1">
      <div className="intro">
        <div className="intro_content">
          <div className="intro_text">
            <h1>
              Build the <span className="highlight">perfect one</span> that
              suits you
              <br />
              It’s only a <span className="highlight">few clicks</span> away
            </h1>

            <p className="hero_text_1">
              The CRM is designed with the end-user in mind, ensuring that it
              fits various business models and user requirements comfortably.
            </p>
            <p className="hero_text_2">
              A hassle-free implementation process, which is a significant
              advantage for businesses looking to get started with minimal
              downtime.
            </p>
            <div className="hero_button">
              <Start_building />
            </div>
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
        </div>
      </div>
      <div className="image">
        <img
          src={hero_image}
          alt="Descriptive Alt Text"
          className="hero_image"
        />
      </div>
    </div>
  );
}

export default Section1;
