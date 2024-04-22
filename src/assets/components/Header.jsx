import React from 'react';
import Logo from '../img/logo.png';
import '../style/Header.scss';

const Header = ({ activePage }) => {
  return (
    <header className="banner-header">
      <img src={Logo} alt="Logo Kasa" className="banner-logo" />
      <nav className="banner-nav">
        <ul>
          <li><a href="/" className={activePage === 'home' ? 'active' : ''}>Accueil</a></li>
          <li><a href="/apropos" className={activePage === 'about' ? 'active' : ''}>À Propos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
