import React from 'react';
import Banner from '../components/Banner';
import CardsMain from '../components/Cards-main';
import homeBackgroundImage from '../img/imgbackground.png'; // Importez votre image de fond

const Homepage = () => {
  return (
    <div>
      <Banner
        sloganText="Chez vous, partout et ailleurs"
        backgroundImage={homeBackgroundImage} // Utilisez votre image importÃ©e
      />
      <CardsMain />
    </div>
  );
};

export default Homepage;