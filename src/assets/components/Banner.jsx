import React from 'react';
import Header from './Header'; // Assurez-vous que le chemin d'accès est correct
import '../style/Banner.scss';

const Banner = ({ activePage }) => {
  return (
    <div className="banner">
      <Header activePage={activePage} />
      <section className="banner-slogan">
        <div className="slogan-background">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      {/* Le reste du contenu de la bannière... */}
    </div>
  );
};

export default Banner;
