import React from "react";
import "./Section1.css";
import { Button2 } from "../Buttons/Button2/Button2";

function Section1() {
  return (
    <div className="section1">
      <div className="intro">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          maiores.
        </h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum,
          facilis porro excepturi cumque, at quaerat impedit dicta, nemo aliquid
          molestiae praesentium temporibus vero eveniet aspernatur qui doloribus
          architecto. Repudiandae?
        </h3>
        <Button2 />
      </div>
      <div className="image">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          eligendi.
        </h1>
      </div>
    </div>
  );
}

export default Section1;
