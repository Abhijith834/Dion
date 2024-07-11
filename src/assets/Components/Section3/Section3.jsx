import React, { useState, useEffect, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import './Section3.css';
import ipad_animation from '../../images/ipad_animation.gif';

const Section3 = () => {
  const [color, setColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--background_color').trim());
  const ipadRef = useRef(null);
  const imgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--background_color', color);
  }, [color]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -30% 0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          ipadRef.current.classList.add('animate-ipad');
          imgRef.current.classList.add('animate-ipad-image');
          setHasAnimated(true);
        }
      });
    }, options);

    if (ipadRef.current) {
      observer.observe(ipadRef.current);
    }

    return () => {
      if (ipadRef.current) {
        observer.unobserve(ipadRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className='section3'>
      <div className="section3_heading1">
        <h2>Elevate the customer experience</h2>
      </div>
      <div className="section3_content_text1">
        <p>Exceed customer expectations, solve customer challenges faster, and create deeper connections across your organization with Dion.</p>
        <ul>
          <li>Convenient customer support portal</li>
          <li>Knowledge management, ticketing, and insights</li>
          <li>SLA management helps customer support keep commitments</li>
          <li>In-depth analytics amplifies your view into customer health</li>
        </ul>
      </div>
      <div className="section3_content_gif">
        <div className="ipad_animation" ref={ipadRef}>
          <img src={ipad_animation} alt="Ipad Animation" ref={imgRef} />
        </div>
      </div>
      <div className="color-picker">
        <HexColorPicker color={color} onChange={setColor} />
      </div>
      <div className="section3_heading2">
        <h2>Infinite Customization Options for Your Unique Business Needs</h2>
      </div>
      <div className="section3_content_text2">
        <ul>
          <li>Customize the interface to reflect your brand's identity</li>
          <li>Personalize features to match your unique business processes</li>
          <li>Tailor workflows to suit your specific operational needs</li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;