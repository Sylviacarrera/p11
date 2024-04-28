import React from 'react';
import Banner from '../components/Banner';
import Tabs from '../components/Dropdown';

import aboutBackgroundImage from '../img/imgbackground2.png'; // Importez votre image de fond

const AboutPage = () => {
  return (
    <div>
      <Banner
        sloganText=""
        backgroundImage={aboutBackgroundImage}
      />
      <Tabs />
    </div>
  );
};

export default AboutPage;