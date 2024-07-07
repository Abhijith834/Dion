// Button.js
import React from 'react';
import './Button.css';

const Button = ({ text, link }) => {
  return (
    <a href={link} className='button'>
      {text}
    </a>
  );
};

export default Button;
