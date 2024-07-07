import React, { useEffect, useRef } from "react";
import "./Section4.css";
import PopupTiles from "../Popup_tiles/Popup_tiles";
import BO from "../../images/logos/BO.png";
import FM from "../../images/logos/FM.png";
import SE from "../../images/logos/SE.png";
import SC from "../../images/logos/SC.png";
import SM from "../../images/logos/SM.png";
import PM from "../../images/logos/PM.png";
import TC from "../../images/logos/TC.png";
import FS from "../../images/logos/FS.png";

const popupItems = [
  { icon: <img src={BO} alt="BO" />, text: "Business Operations" },
  { icon: <img src={FM} alt="BO" />, text: "Financial Management" },
  { icon: <img src={SE} alt="BO" />, text: "Security & Compliance" },
  { icon: <img src={SC} alt="BO" />, text: "Supply Chain" },
  { icon: <img src={SM} alt="BO" />, text: "Sales & Marketing" },
  { icon: <img src={PM} alt="BO" />, text: "Project Management" },
  { icon: <img src={TC} alt="BO" />, text: "Team Colaborations" },
  { icon: <img src={FS} alt="BO" />, text: "Field Services" },
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
      <h1>No-Code Solutions Customized for All Your Demands</h1>
      <h2>Simple tools to build customized apps.</h2>
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
