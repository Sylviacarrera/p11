import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner activePage="home" />
      {/* Ajoutez ici d'autres éléments ou composants spécifiques à la page d'accueil */}
      <Footer />
    </div>
  );
};

export default Homepage;
