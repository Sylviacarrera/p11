// Dans votre fichier Footer.js
import React from 'react';
import '../style/Footer.scss'; // Assurez-vous que le chemin est correct
import logo from '../img/logo.png'; // Importez le logo si nécessaire

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" /> {/* Logo en bas */}
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
