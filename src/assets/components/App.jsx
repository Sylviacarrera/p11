import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Aboutpage from '../pages/Aboutpage';
import NotFoundPage from '../pages/Notfoundpage'; // Assurez-vous que le chemin d'accès est correct
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apropos" element={<Aboutpage />} />
        {/* Route générique pour la page 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
