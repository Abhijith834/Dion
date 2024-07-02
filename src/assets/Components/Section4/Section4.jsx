import React, { useEffect, useRef } from "react";
import "./Section4.css";
import PopupTiles from "../Popup_tiles/Popup_tiles";

const popupItems = [
  { icon: "🚀", text: "Rocket" },
  { icon: "🔥", text: "Fire" },
  { icon: "💧", text: "Water" },
  { icon: "🌟", text: "Star" },
  { icon: "⚡", text: "Lightning" },
  { icon: "🍀", text: "Clover" },
  { icon: "🎵", text: "Music" },
  { icon: "📚", text: "Books" },
];

const Section4 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const setGap = () => {
      if (sectionRef.current) {
        const width = sectionRef.current.offsetWidth;
        const gap = Math.max(20, width / 30); // Adjust the formula as needed
        sectionRef.current.style.setProperty("--gap", `${gap}px`);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tiles = entry.target.querySelectorAll(".popup_tiles");
            tiles.forEach((tile, index) => {
              const popup = tile.querySelector(".popup");
              const icon = tile.querySelector(".popup_icon");
              const text = tile.querySelector("h1");

              const baseDelay = index * 0.09; // 0.09 seconds delay for each tile

              popup.style.animationPlayState = "running";
              icon.style.animationPlayState = "running";
              text.style.animationPlayState = "running";

              popup.style.animationDelay = `${baseDelay}s`;
              icon.style.animationDelay = `${baseDelay + 0.1}s`;
              text.style.animationDelay = `${baseDelay + 0.2}s`;
            });
            observer.unobserve(entry.target); // Unobserve once triggered
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold to trigger at 20% visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    setGap();
    window.addEventListener("resize", setGap); // Adjust gap on resize

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("resize", setGap);
    };
  }, []);

  return (
    <div className="section4" ref={sectionRef}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <div className="popup_boxes">
        {popupItems.map((item, index) => (
          <div key={index}>
            <PopupTiles icon={item.icon} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
