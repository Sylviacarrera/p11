import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logements.json';
import Carousel from '../components/Carousel';
import LogementDetails from '../components/Presentation';
import NotFoundPage from './Notfoundpage';

const Logements = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <NotFoundPage />
  }

  return (
    <div className="logement-wrapper"> 
      <Carousel pictures={logement.pictures} />

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