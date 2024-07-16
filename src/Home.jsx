import React from "react";
import "./Home.css";
import Hero from "./assets/Components/Hero/Hero";
import Section2 from "./assets/Components/Section2/Section2";
import Section4 from "./assets/Components/Section4/Section4";
import Section5 from "./assets/Components/Section5/Section5";
import Section6 from "./assets/Components/Section6/Section6";
import Section7 from "./assets/Components/Section3/Section3";
import Banner from "./assets/Components/Banner/Banner";
import Footer from "./assets/Components/Footer/Footer";
import Start_building from "./assets/Components/Buttons/Start_building/Start_building";
import hero_image from "./assets/images/homepage-small.webp"; // Ensure the path is correct

const Home = () => {
  const introHeading = (
    <h1>
      Build the <span className="highlight">perfect one</span> that
      suits you
      <br />
      It’s only a <span className="highlight">few clicks</span> away
    </h1>
  );

  const heroText1 = "The CRM is designed with the end-user in mind, ensuring that it fits various business models and user requirements comfortably.";
  const heroText2 = "A hassle-free implementation process, which is a significant advantage for businesses looking to get started with minimal downtime.";
  const heroImage = <img src={hero_image} alt="Descriptive Alt Text" className="hero_image" />;
  const startBuildingButton = <Start_building />;

  return (
    <div className="content">
      <Hero
        introHeading={introHeading}
        heroText1={heroText1}
        heroText2={heroText2}
        heroImage={heroImage}
        startBuildingButton={startBuildingButton}
      />
      <Section2 />
      <Section7 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
};

export default Home;
