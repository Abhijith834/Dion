import React, { useState } from "react";
import "./Hamburger_menu.css";

const HamburgerMenu = ({ toggleSideMenu }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    toggleSideMenu(!isClicked);
  };

  return (
    <div
      className={`Hamburger_menu ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`rectangle rectangle1 ${isClicked ? "clicked" : ""}`}
      ></div>
      <div
        className={`rectangle rectangle2 ${isClicked ? "clicked" : ""}`}
      ></div>
      <div
        className={`rectangle rectangle3 ${isClicked ? "clicked" : ""}`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
