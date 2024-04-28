import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../style/Carousel.scss'; // Assurez-vous d'avoir un fichier CSS pour les styles spécifiques du carrousel

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel-container">
      <FontAwesomeIcon 
        icon={faChevronLeft} 
        onClick={prevImage} 
        className="carousel-control left" 
      />
      <img src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <FontAwesomeIcon 
        icon={faChevronRight} 
        onClick={nextImage} 
        className="carousel-control right" 
      />
    </div>
  );
};

export default Carousel;
