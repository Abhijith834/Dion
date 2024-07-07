import React from "react";
import "./Section5.css";
import Button from "../Buttons/Button/Button";
import ai_image from "../../images/ai.avif";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";

const Section5 = () => {
  return (
    <div className="section5">
      <h1>Take a Product Tour</h1>
      <h2>Get to know Dion</h2>
      <h2>
        Take a quick tour and <span className="highlight">start building for free.</span>
      </h2>
      <div className="section5_grid">
        <div className="section5_heading_1">
          <h1>Harness the power of AI for smarter, faster decision-making.</h1>
          </div>
        <div className="section_5_text1">
          <p>Leverage AI technology within our CRM to enhance your decision-making process. With artificial intelligence, you'll gain instant access to insightful data analysis, enabling quicker, more informed decisions that propel your business forward. Say goodbye to guesswork and embrace efficiency with our AI-driven solutions.</p>
          </div>
        <div className="section5_button-1">
          <Button text="view interactive demo" link="/get-started" />
          </div>
        <div className="section5_image section5_image-1">
          <img src={ai_image} alt="AI" />
        </div>

        
        <div className="section5_heading_2">
          <h1>Customize with flexibility, adapting seamlessly to your business needs.</h1>
          </div>
        <div className="section_5_text2">
          <p>Our CRM empowers you with unparalleled customization, thanks to our versatile templates. Tailor every aspect to fit your unique business requirements seamlessly. From workflows to reports, adapt and evolve your operations with ease, ensuring your CRM grows and changes as dynamically as your business does.</p>
          </div>
        <div className="section5_button-2">
          <Button text="start building with a template" link="/get-started" />
          </div>
        <div className="section5_image section5_image-2">
          <img src={image2} alt="Image 2" />
        </div>
        

        <div className="section5_heading_3">
          <h1>Scale effortlessly, growing your business without limits.</h1>
          </div>
        <div className="section_5_text3">
          <p>Our CRM is designed to scale with you, supporting your business's growth every step of the way. With scalable features and flexible configurations, you can expand your operations, add new users, and manage increasing data volumes without skipping a beat. Grow your business boundlessly and effortlessly with us.</p>
          </div>
        <div className="section5_button-3">
            <Button text="start building free" link="/get-started" />
          </div>
        <div className="section5_image section5_image-3">
          <img src={image3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
