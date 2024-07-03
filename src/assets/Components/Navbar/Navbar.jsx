import React, { useState } from "react";
import "./Navbar.css";
import HamburgerMenu from "../Buttons/Hamburger_menu/Hamburger_menu";
import NavSideMenu from "../Nav_side_menu/Nav_side_menu";
import Dropdown from "../Dropdown/Dropdown";
import { SubItems1, SubItems2, SubItems3 } from "../Nav_sub_menu/Nav_sub_menu";
import Dropdown_arrow from "../Props/Dropdown_arrow/Dropdown_arrow";
import Logo from "../Logo/Logo";
import Navbar_button from "../Buttons/Navbar_button/Navbar_button";

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
        <div className="navbar_logo">
          <Logo />
        </div>
        <ul className="navbar-menu">
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="title_menu">
              Solutions
              <Dropdown_arrow isOpen={dropdownVisible && dropdownIndex === 1} />
            </div>
          </li>
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="title_menu">
              Platform
              <Dropdown_arrow isOpen={dropdownVisible && dropdownIndex === 2} />
            </div>
          </li>
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="title_menu">
              Resources
              <Dropdown_arrow isOpen={dropdownVisible && dropdownIndex === 3} />
            </div>
          </li>
          <li>
            <div className="title_menu">Pricing</div>
          </li>
        </ul>
        <div className="navbar_side_menu">
          <a href="/" className="navbar_login">
            Log In
          </a>
          <Navbar_button />
          <HamburgerMenu toggleSideMenu={toggleSideMenu} />
        </div>
        <NavSideMenu isOpen={isSideMenuOpen} />
      </nav>
      <Dropdown
        isVisible={dropdownVisible}
        SubItems={getDropdownItems()}
        handleMouseEnter={() => setDropdownVisible(true)}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default Navbar;
