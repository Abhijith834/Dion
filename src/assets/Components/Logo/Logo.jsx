import React from "react";
import "./Logo.css";
import logo_pic from "../../images/logo.webp";

export const Logo = () => {
  return (
    <div className="Logo">
      <h2>Dion</h2>
      <img className="logo_pic" src={logo_pic} alt="Logo" />
    </div>
  );
};
export default Logo;
