import React from "react";
import Section1 from "./assets/Components/Section1/Section1";
import Section2 from "./assets/Components/Section2/Section2";
import Section4 from "./assets/Components/Section4/Section4";
import Section5 from "./assets/Components/Section5/Section5";
import Section6 from "./assets/Components/Section6/Section6";
import Banner from "./assets/Components/Banner/Banner";
import Footer from "./assets/Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
