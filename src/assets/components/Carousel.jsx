import React, { useState } from 'react';
import '../style/Carousel.scss'; // Assurez-vous d'avoir un fichier CSS pour les styles spÃ©cifiques du carrousel

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const renderCounter = () => {
    if (pictures.length <= 1) return null;
    return (
      <div className="carousel-counter">
        {currentImageIndex + 1}/{pictures.length}
      </div>
    );
  };

  return (
    <div className="carousel-container">
      {pictures.length > 1 && (
        <i
          className="fas fa-chevron-left carousel-control left"
          onClick={prevImage}
        ></i>
      )}
      <img src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      {pictures.length > 1 && (
        <i
          className="fas fa-chevron-right carousel-control right"
          onClick={nextImage}
        ></i>
      )}
      {renderCounter()}
    </div>
  );
};

export default Carousel;