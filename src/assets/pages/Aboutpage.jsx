import React from 'react';
import Header from '../components/Header';  
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs';

import aboutBackgroundImage from '../img/imgbackground2.png'; // Importez votre image de fond

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Banner 
        sloganText=""
        backgroundImage={aboutBackgroundImage} 
      />
      <Tabs/>
      <Footer />
    </div>
  );
};

export default AboutPage;
