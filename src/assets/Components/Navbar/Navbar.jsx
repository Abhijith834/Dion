import React, { useState } from "react";
import "./Navbar.css";
import HamburgerMenu from "../Buttons/Hamburger_menu/Hamburger_menu";
import NavSideMenu from "../Nav_side_menu/Nav_side_menu";
import Dropdown from "../Dropdown/Dropdown";
import { SubItems1, SubItems2, SubItems3 } from "../Nav_sub_menu/Nav_sub_menu";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(0);

  const toggleSideMenu = (isOpen) => {
    setIsSideMenuOpen(isOpen);
  };

  const getDropdownItems = () => {
    switch (dropdownIndex) {
      case 1:
        return SubItems1;
      case 2:
        return SubItems2;
      case 3:
        return SubItems3;
      default:
        return [];
    }
  };

  const handleMouseEnter = (index) => {
    setDropdownVisible(true);
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="navbar-menu">
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="title_menu">Solutions</div>
          </li>
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="title_menu">Platform</div>
          </li>
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="title_menu">Resources</div>
          </li>
          <li>
            <div className="title_menu">Pricing</div>
          </li>
        </ul>
        <HamburgerMenu toggleSideMenu={toggleSideMenu} />
        <NavSideMenu isOpen={isSideMenuOpen} />
      </nav>
      <Dropdown
        isVisible={dropdownVisible}
        SubItems={getDropdownItems()}
        colorClass={`${
          dropdownIndex === 1
            ? "red-dropdown"
            : dropdownIndex === 2
            ? "green-dropdown"
            : dropdownIndex === 3
            ? "blue-dropdown"
            : ""
        }`}
        handleMouseEnter={() => setDropdownVisible(true)}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default Navbar;
