import React from "react";
import "./Home.css";
import Hero from "./assets/Components/Hero/Hero";
import Hower_tiles from "./assets/Components/Hower_tiles/Hower_tiles";
import Section4 from "./assets/Components/Section4/Section4";
import Section5 from "./assets/Components/Section5/Section5";
import Section6 from "./assets/Components/Section6/Section6";
import Section7 from "./assets/Components/Section3/Section3";
import Banner from "./assets/Components/Banner/Banner";
import Footer from "./assets/Components/Footer/Footer";
import Start_building from "./assets/Components/Buttons/Start_building/Start_building";
import hero_image from "./assets/images/homepage-small.webp";

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

  const Hower_tiles_Heading = "WHY CHOOSE US";
  const Hower_tiles_Subheading = "Here are a few reasons to choose Dion over another solution:";

  const tiles = [
    {
      heading: "Seamless Integration",
      content: "Effortlessly integrate with your existing tools and systems for a streamlined workflow. Our CRM eliminates data silos and enhances productivity, ensuring smooth operation across your business ecosystem",
    },
    {
      heading: "Customization and Flexibility",
      content: "Tailor our CRM to meet your unique business needs. With customizable modules and adaptable features, our platform evolves with your business, ensuring a perfect fit for any workflow or process",
    },
    {
      heading: "Security and Reliability",
      content: "Experience unmatched data security and consistent reliability. Our CRM safeguards your information with advanced encryption and regular security updates, ensuring your business operations are secure and uninterrupted",
    },
    {
      heading: "Affordable and Scalable Solutions",
      content: "Get a cost-effective CRM solution that grows with your business. Our scalable platform offers flexible pricing plans, making it accessible for businesses of all sizes and adaptable to your changing needs",
    },
  ];

  return (
    <div className="content">
      <Hero
        introHeading={introHeading}
        heroText1={heroText1}
        heroText2={heroText2}
        heroImage={heroImage}
        startBuildingButton={startBuildingButton}
      />
      <Hower_tiles
        heading={Hower_tiles_Heading}
        subheading={Hower_tiles_Subheading}
        tiles={tiles}
      />
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
