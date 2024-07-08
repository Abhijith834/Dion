import React, { useState, useRef, useEffect } from "react";
import "./Section6.css";
import Tile1 from "./tiles/tile1";
import Tile2 from "./tiles/tile2";
import Tile3 from "./tiles/tile3";
import Tile4 from "./tiles/tile4";
import Tile5 from "./tiles/tile5";
import Tile6 from "./tiles/tile6";
import Tile7 from "./tiles/tile7";

const Section6 = () => {
  const [selectedTile, setSelectedTile] = useState("Login");
  const navbarRef = useRef(null);
  const tileRefs = useRef([]);

  const tiles = [
    { title: "Login", content: <Tile1 /> },
    { title: "Data", content: <Tile2 /> },
    { title: "Forms", content: <Tile3 /> },
    { title: "Maps", content: <Tile4 /> },
    { title: "Signatures", content: <Tile5 /> },
    { title: "Calendar", content: <Tile6 /> },
    { title: "Reports", content: <Tile7 /> },
  ];

  useEffect(() => {
    const selectedIndex = tiles.findIndex(
      (tile) => tile.title === selectedTile
    );
    if (selectedIndex !== -1 && tileRefs.current[selectedIndex]) {
      const selectedTileElement = tileRefs.current[selectedIndex];
      const navbar = navbarRef.current;

      const navbarRect = navbar.getBoundingClientRect();
      const tileRect = selectedTileElement.getBoundingClientRect();

      const offset =
        tileRect.left -
        navbarRect.left +
        tileRect.width / 2 -
        navbarRect.width / 2;
      navbar.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [selectedTile]);

  const handleTileClick = (title) => {
    setSelectedTile(title);
  };

  const handleMouseDown = (e) => {
    const navbar = navbarRef.current;
    const startX = e.pageX - navbar.offsetLeft;
    const scrollLeft = navbar.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - navbar.offsetLeft;
      const walk = x - startX;
      navbar.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      navbar.style.cursor = "grab";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    navbar.style.cursor = "grabbing";
  };

  return (
    <div className="section6">
      <h1>Structure your data or online database in a way that makes sense for you.</h1>
      <h2>Use simple tools to build customized apps to view and update your online database.</h2>
      <div
        className="section6_navbar"
        ref={navbarRef}
        onMouseDown={handleMouseDown}
      >
        {tiles.map((tile, index) => (
          <h1
            key={tile.title}
            ref={(el) => (tileRefs.current[index] = el)}
            onClick={() => handleTileClick(tile.title)}
            className={selectedTile === tile.title ? "active" : ""}
          >
            {tile.title}
          </h1>
        ))}
      </div>
      <div className="section_content">
        {selectedTile !== null &&
          tiles.find((tile) => tile.title === selectedTile)?.content}
      </div>
    </div>
  );
};

export default Section6;
