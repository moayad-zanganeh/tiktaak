import React from 'react';
import Slider from './slider';
import Albom from './albom';
import GalleryImages from './gallery-images';
import ContactUs from './contact-us';

function MainBar() {
  return (
    <>
      <Slider />
      <Albom />
      <GalleryImages />
      <ContactUs />
    </>
  );
}

export default MainBar;
