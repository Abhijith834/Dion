import React from "react";
import "./Dropdown.css";
import Dropdown_button from "../Buttons/Dropdown_button/Dropdown_button";

const Dropdown_Container = ({ SubItems }) => {
  return (
    <div className={"dropdown_container"}>
      <div className="drop">
        <h2>Lorem, ipsum dolor.</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <hr />
        <div className="dropdown_items">
          {SubItems.map((category, index) => (
            <div className="dropdown_category" key={index}>
              <div className="title">{category.title}</div>
              <ul className="dropdown_content">
                {category.subItems.map((menu, subIndex) => (
                  <li key={subIndex}>
                    <a href={menu.url} className="dropdown_content_list">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="dropdown_button">
          <Dropdown_button />
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({
  SubItems,
  colorClass,
  isVisible,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`dropdown ${isVisible ? "visible" : "closing"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Dropdown_Container SubItems={SubItems} />
    </div>
  );
};

export default Dropdown;
``;
