import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage'; // Assurez-vous que le chemin d'accès est correct
import Aboutpage from '../pages/Aboutpage'; // Assurez-vous que le chemin d'accès est correct
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apropos" element={<Aboutpage />} />
        {/* Ajoutez d'autres routes au besoin */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
