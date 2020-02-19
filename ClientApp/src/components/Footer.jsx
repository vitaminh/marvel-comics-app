import React from 'react';

const currentDate = new Date();

const Footer = props => {
  return (
  <div className="border-top box-shadow text-center">
    Data provided by <a href={'https://www.marvel.com/'}>Marvel</a>. © { currentDate.getFullYear() } Marvel
  </div>
  )
};

export default Footer;
