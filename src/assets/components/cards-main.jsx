import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/logements.json';
import '../style/Cards.scss'

const CardsMain = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/logements/${id}`);
  };

  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card" onClick={() => handleCardClick(item.id)}>
          <div className="card-image" style={{ backgroundImage: `url(${item.cover})` }}>
            <div className="card-title">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsMain;
