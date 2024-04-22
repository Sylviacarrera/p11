import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import '../style/App.scss'; // Assurez-vous que le chemin vers votre fichier SCSS est correct

const App = () => {
  return (
    <div className="app">
      {/* Contenu principal de l'application */}
      <Banner />
      
      {/* Le reste du contenu de votre application */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
