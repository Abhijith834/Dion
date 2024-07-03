import React from "react";
import "./Dropdown_arrow.css";

const Dropdown_arrow = ({ isOpen }) => {
  return (
    <div
      className={`dropdown_arrow ${
        isOpen ? "dropdown_open" : "dropdown_close"
      }`}
    >
      <hr className="dropdown_arrow_left" />
      <hr className="dropdown_arrow_right" />
    </div>
  );
};

export default Dropdown_arrow;
