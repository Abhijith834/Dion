import React from "react";
import "./Section5.css";

const Section5 = () => {
  return (
    <div className="section5">
      <h1>Lorem ipsum dolor sit.</h1>
      <h2>Lorem ipsum dolor sit.</h2>
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
        obcaecati.
      </h2>
      <div className="section5_grid">
        {Array(6)
          .fill(0)
          .map((_, index) => {
            let content;
            switch (index) {
              case 0:
                content = "This is some text for item 1.";
                break;
              case 3:
                content = "This is some text for item 4.";
                break;
              case 4:
                content = "This is some text for item 5.";
                break;
              default:
                content = `Item ${index + 1}`;
            }
            return <div key={index}>{content}</div>;
          })}
      </div>
    </div>
  );
};

export default Section5;
