import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import './Section7.css';

const Section7 = () => {
  const [color, setColor] = useState('#045AFF');

  useEffect(() => {
    document.documentElement.style.setProperty('--background_color', color);
  }, [color]);

  return (
    <div className='section7'>
      <div className='color-picker'>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
      Section7
    </div>
  );
};

export default Section7;
