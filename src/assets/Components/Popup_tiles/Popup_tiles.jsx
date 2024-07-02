import React from "react";
import "./Popup_tiles.css";

const PopupTiles = ({ icon, text }) => {
  return (
    <div className="popup_tiles">
      <div className="popup">
        <div className="popup_icon">{icon}</div>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default PopupTiles;
