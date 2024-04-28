import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Aboutpage from '../pages/Aboutpage';
import Logements from '../pages/Logements';
import NotFoundPage from '../pages/Notfoundpage';
import Footer from '../components/Footer';
import Header from '../components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apropos" element={<Aboutpage />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
