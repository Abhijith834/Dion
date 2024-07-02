import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

const footerItem_1 = [
  { name: "Option 1.1.1", url: "/" },
  { name: "Option 1.1.2", url: "/" },
  { name: "Option 1.1.3", url: "/" },
  { name: "Option 1.1.4", url: "/" },
  { name: "Option 1.1.5", url: "/" },
  { name: "Option 1.1.6", url: "/" },
  { name: "Option 1.1.7", url: "/" },
  { name: "Option 1.1.8", url: "/" },
];

const footerItem_2 = [
  { name: "Option 1.2.1", url: "/" },
  { name: "Option 1.2.2", url: "/" },
  { name: "Option 1.2.3", url: "/" },
  { name: "Option 1.2.4", url: "/" },
  { name: "Option 1.2.5", url: "/" },
  { name: "Option 1.2.6", url: "/" },
  { name: "Option 1.2.7", url: "/" },
  { name: "Option 1.2.8", url: "/" },
];

const footerItem_3 = [
  { name: "Option 1.3.1", url: "/" },
  { name: "Option 1.3.2", url: "/" },
  { name: "Option 1.3.3", url: "/" },
  { name: "Option 1.3.4", url: "/" },
  { name: "Option 1.3.5", url: "/" },
  { name: "Option 1.3.6", url: "/" },
  { name: "Option 1.3.7", url: "/" },
  { name: "Option 1.3.8", url: "/" },
];

const footerItem_4 = [
  { name: "Option 1.4.1", url: "/" },
  { name: "Option 1.4.2", url: "/" },
  { name: "Option 1.4.3", url: "/" },
  { name: "Option 1.4.4", url: "/" },
  { name: "Option 1.4.5", url: "/" },
  { name: "Option 1.4.6", url: "/" },
  { name: "Option 1.4.7", url: "/" },
  { name: "Option 1.4.8", url: "/" },
];

const footerItem_5 = [
  { name: "Option 1.5.1", url: "/" },
  { name: "Option 1.5.2", url: "/" },
  { name: "Option 1.5.3", url: "/" },
  { name: "Option 1.5.4", url: "/" },
  { name: "Option 1.5.5", url: "/" },
  { name: "Option 1.5.6", url: "/" },
  { name: "Option 1.5.7", url: "/" },
  { name: "Option 1.5.8", url: "/" },
];

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer_content">
        <div className="footer_logo">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptas hic vero sapiente!
          </p>
        </div>
        <div className="footer_menu">
          <div className="footer_title">Title 1</div>
          <div className="footer_title">Title 2</div>
          <div className="footer_title">Title 3</div>
          <div className="footer_title">Title 4</div>
          <div className="footer_title">Title 5</div>

          <ul className="footer_item">
            {footerItem_1.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer_item">
            {footerItem_2.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer_item">
            {footerItem_3.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer_item">
            {footerItem_4.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer_item">
            {footerItem_5.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        nobis.
      </h3>
    </div>
  );
};

export default Footer;
