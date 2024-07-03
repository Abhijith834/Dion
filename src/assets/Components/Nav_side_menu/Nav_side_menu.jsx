import React, { useState } from "react";
import "./Nav_side_menu.css";
import { SubItems1, SubItems2, SubItems3 } from "../Nav_sub_menu/Nav_sub_menu";

const NavSideMenu = ({ isOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubSubmenu, setOpenSubSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const toggleSubSubmenu = (menu) => {
    setOpenSubSubmenu(openSubSubmenu === menu ? null : menu);
  };

  const renderSubmenuItems = (items, prefix) => {
    return items.map((item, i) => (
      <li key={`${prefix}-${i}`}>
        <a href="#" onClick={() => toggleSubSubmenu(`${prefix}-sub-${i}`)}>
          {item.title}
        </a>
        <ul
          className={`subsubmenu ${
            openSubSubmenu === `${prefix}-sub-${i}` ? "open" : ""
          }`}
        >
          {item.subItems.map((subItem, j) => (
            <li key={`${prefix}-sub-${i}-${j}`}>
              <a href={subItem.url}>{subItem.name}</a>
            </li>
          ))}
        </ul>
      </li>
    ));
  };

  return (
    <div className={`nav_side_menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <h3 className="side_menu" onClick={() => toggleSubmenu("solutions")}>
            Solutions
          </h3>
          <ul
            className={`submenu ${openSubmenu === "solutions" ? "open" : ""}`}
          >
            {renderSubmenuItems(SubItems1, "solutions")}
          </ul>
        </li>
        <li>
          <h3 className="side_menu" onClick={() => toggleSubmenu("platform")}>
            Platform
          </h3>
          <ul className={`submenu ${openSubmenu === "platform" ? "open" : ""}`}>
            {renderSubmenuItems(SubItems2, "platform")}
          </ul>
        </li>
        <li>
          <h3 className="side_menu" onClick={() => toggleSubmenu("resources")}>
            Resources
          </h3>
          <ul
            className={`submenu ${openSubmenu === "resources" ? "open" : ""}`}
          >
            {renderSubmenuItems(SubItems3, "resources")}
          </ul>
        </li>
        <li>
          <h3 className="side_menu">Pricing</h3>
        </li>
      </ul>
    </div>
  );
};

export default NavSideMenu;
