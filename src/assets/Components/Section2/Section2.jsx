import React, { useEffect, useRef } from "react";
import "./Section2.css";

function Section2() {
  const tileRefs = useRef([]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 500;
    const isMediumScreen = window.innerWidth >= 500 && window.innerWidth <= 800;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Exclude top and bottom 20% of viewport
      threshold: 0.5, // Trigger when 50% of the tile is within the center area
    };

    let currentTile = null;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = tileRefs.current.indexOf(entry.target);
        const rowIndex = Math.floor(index / 2);

        if (entry.isIntersecting) {
          if (currentTile && currentTile !== entry.target) {
            currentTile.classList.remove("active");
            if (isMediumScreen) {
              tileRefs.current
                .filter((_, idx) => Math.floor(idx / 2) === rowIndex)
                .forEach((tile) => tile.classList.remove("row-active"));
            } else {
              currentTile.classList.remove("active");
            }
          }
          entry.target.classList.add("active");
          if (isMediumScreen) {
            tileRefs.current
              .filter((_, idx) => Math.floor(idx / 2) === rowIndex)
              .forEach((tile) => tile.classList.add("row-active"));
          }
          currentTile = entry.target;
        } else {
          entry.target.classList.remove("active");
          if (isMediumScreen) {
            tileRefs.current
              .filter((_, idx) => Math.floor(idx / 2) === rowIndex)
              .forEach((tile) => tile.classList.remove("row-active"));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    tileRefs.current.forEach((tile) => {
      if (tile) observer.observe(tile);
    });

    return () => {
      tileRefs.current.forEach((tile) => {
        if (tile) observer.unobserve(tile);
      });
    };
  }, []);

  return (
    <div className="section2">
      <h1 className="section-heading">Heading</h1>
      <h2 className="section-subheading">Sub Heading</h2>
      <div className="tiles">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              className="tile"
              ref={(el) => (tileRefs.current[index] = el)}
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default Section2;
