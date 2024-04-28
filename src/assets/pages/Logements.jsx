import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logements.json';
import Carousel from '../components/Carousel';
import '../style/Logements.scss';

const Logements = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);


  // Création d'une étoile de classement pour le rating
  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    index < logement.rating ? '★' : '☆'
  )).join(' ');

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <div>{logement.location}</div>
      <div>{logement.tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
      <div>
        <span>{logement.host.name}</span>
        <img src={logement.host.picture} alt={`Hôte : ${logement.host.name}`} />
      </div>
      <div>{ratingStars}</div>
      {/* D'autres détails du logement peuvent être ajoutés ici */}
    </div>
  );
};

export default Logements;
