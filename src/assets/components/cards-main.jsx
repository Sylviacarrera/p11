import React from 'react';
import  data  from '../data/logements.json'; // Assurez-vous d'importer correctement vos données
import '../style/Cards.scss';

const CardsMain = () => {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card" onClick={() => console.log('Card clicked!', item.id)}>
          <div className="card-image" style={{ backgroundImage: `url(${item.cover})` }}>
            <div className="card-title">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsMain;
