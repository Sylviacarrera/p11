import React from 'react';
import '../style/Banner.scss'; // Assurez-vous que le chemin vers votre fichier SCSS est correct
import Logo from '../img/logo.png'

const Banner = () => {
  return (
    <div className="banner">
      {/* En-tête avec logo et navigation */}
      <header className="banner-header">
      <img src={Logo} alt="Logo Kasa" className="banner-logo" />
        <nav className="banner-nav">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À Propos</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Slogan */}
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
