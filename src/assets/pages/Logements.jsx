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
    <div className="logement-wrapper"> {/* Conteneur avec marges */}
      <Carousel pictures={logement.pictures} />
      <div className="logement-content"> {/* Nouvelle div pour le contenu */}
        <h1 className="logement-title">{logement.title}</h1>
        <div className="logement-location">{logement.location}</div>
        <div className="logement-tags">
          {logement.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
        </div>
        <div className="logement-host">
          <span>{logement.host.name}</span>
          <img src={logement.host.picture} alt={`Hôte : ${logement.host.name}`} />
        </div>
        <div className="logement-rating">{ratingStars}</div>
        {/* D'autres détails du logement peuvent être ajoutés ici */}
      </div>
    </div>
  );
};

export default Logements;
