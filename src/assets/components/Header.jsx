import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import '../style/Header.scss';

const Header = () => {
  return (
    <header className="banner-header">
      <img src={Logo} alt="Logo Kasa" className="banner-logo" />
      <nav className="banner-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" className={({ isActive }) => isActive ? 'active' : ''}>
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
