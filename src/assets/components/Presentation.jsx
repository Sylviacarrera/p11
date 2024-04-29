import React from 'react';
import '../style/Presentation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';


const LogementDetails = ({ title, location, tags, host, rating }) => {
    // Création d'une étoile de classement pour le rating en utilisant Font Awesome
    const ratingStars = Array.from({ length: 5 }, (_, index) => (
      index < rating ? 
      <FontAwesomeIcon key={index} icon={fasFaStar} /> : // Étoile pleine
      <FontAwesomeIcon key={index} icon={farFaStar} />   // Étoile vide
    ));
  
    return (
      <div className="logement-details">
        <div className="left-column">
          <h1 className="logement-title">{title}</h1>
          <div className="logement-location">{location}</div>
          <div className="logement-tags">
            {tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
          </div>
        </div>
        <div className="right-column">
          <div className="logement-host">
            <span className="host-name">{host.name}</span>
            <img className="host-image" src={host.picture} alt={`Hôte : ${host.name}`} />
          </div>
          <div className="logement-rating">
            {ratingStars}
          </div>
        </div>
      </div>
    );
  };
  
  export default LogementDetails;
  