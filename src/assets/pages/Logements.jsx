import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logements.json';
import Carousel from '../components/Carousel';
import LogementDetails from '../components/Presentation'; // Assurez-vous que le chemin d'accès est correct

const Logements = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  return (
    <div className="logement-wrapper"> {/* Conteneur avec marges */}
      <Carousel pictures={logement.pictures} />
      {/* Utilisation du composant LogementDetails pour afficher les détails */}
      <LogementDetails
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
        description={logement.description}
        equipments={logement.equipments}
      />

    </div>
  );
};

export default Logements;
