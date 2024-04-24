import React from 'react';
import Header from '../components/Header';  
import Banner from '../components/Banner';
import CardsMain from '../components/cards-main';
import Footer from '../components/Footer';
import homeBackgroundImage from '../img/imgbackground.png'; // Importez votre image de fond

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner 
        sloganText="Chez vous, partout et ailleurs"
        backgroundImage={homeBackgroundImage} // Utilisez votre image importée
      />
      <CardsMain/>
      <Footer />
    </div>
  );
};

export default Homepage;
