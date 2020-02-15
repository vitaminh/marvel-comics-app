import React from 'react';

const currentDate = new Date();

const FooterPresentational = props => {
  return <div>Data provided by <a href={'https://www.marvel.com/'}>Marvel</a>. © { currentDate.getFullYear() } Marvel</div>;
};

export default FooterPresentational;
