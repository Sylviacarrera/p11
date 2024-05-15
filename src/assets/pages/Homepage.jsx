import React from 'react';
import Banner from '../components/Banner';
import CardsMain from '../components/Cards';
import homeBackgroundImage from '../img/imgbackground.png'; 

const Homepage = () => {
  return (
    <div>
      <Banner
        sloganText="Chez vous, partout et ailleurs"
        backgroundImage={homeBackgroundImage} 
      />
      <CardsMain />
    </div>
  );
};

export default Homepage;