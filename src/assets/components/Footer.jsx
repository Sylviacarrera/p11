// Dans votre fichier Footer.js
import React from 'react';
import '../style/Footer.scss'; 
import logo from '../img/logo-footer.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" /> {/* Logo en bas */}
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
