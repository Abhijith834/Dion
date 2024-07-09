import React, { useEffect, useRef } from "react";
import "./Section2.css";

function Section2() {
  const tileRefs = useRef([]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;
    const isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024;

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
      <h1 className="section-heading">WHY CHOOSE US</h1>
      <h2 className="section-subheading">Here are a few reasons to choose Dion over another solution:</h2>
      <div className="tiles">
        <div
          className="tile"
          ref={(el) => (tileRefs.current[0] = el)}
        >
          <h3>Seamless Integration</h3>
          <p>Effortlessly integrate with your existing tools and systems for a streamlined workflow. Our CRM eliminates data silos and enhances productivity, ensuring smooth operation across your business ecosystem</p>
        </div>
        <div
          className="tile"
          ref={(el) => (tileRefs.current[1] = el)}
        >
          <h3>Customization and Flexibility</h3>
          <p>Tailor our CRM to meet your unique business needs. With customizable modules and adaptable features, our platform evolves with your business, ensuring a perfect fit for any workflow or process</p>
        </div>
        <div
          className="tile"
          ref={(el) => (tileRefs.current[2] = el)}
        >
          <h3>Security and Reliability</h3>
          <p>Experience unmatched data security and consistent reliability. Our CRM safeguards your information with advanced encryption and regular security updates, ensuring your business operations are secure and uninterrupted</p>
        </div>
        <div
          className="tile"
          ref={(el) => (tileRefs.current[3] = el)}
        >
          <h3>Affordable and Scalable Solutions</h3>
          <p>Get a cost-effective CRM solution that grows with your business. Our scalable platform offers flexible pricing plans, making it accessible for businesses of all sizes and adaptable to your changing needs</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
