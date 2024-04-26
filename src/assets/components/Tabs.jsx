import React, { useState } from 'react';
import '../style/Tabs.scss';

// Le composant Tab prendra un titre et un contenu (children) et la fonction pour gérer le changement d'onglet
const Tab = ({ title, children, onSelect, isSelected }) => (
  <div className="tab">
    <button onClick={onSelect} className={`tab-button ${isSelected ? 'active' : ''}`}>
      {title}
      <span className="chevron">{isSelected ? '▼' : '▶'}</span> {/* Chevron qui change */}
    </button>
    {isSelected && <div className="tab-content">{children}</div>}
  </div>
);

// Le composant Tabs sera utilisé pour encapsuler les onglets et gérer lequel est actif
const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onSelect: () => setSelectedTab(index),
          isSelected: index === selectedTab,
        }),
      )}
    </div>
  );
};

// Utilisation du composant Tabs avec Tab
const App = () => (
  <Tabs>
    <Tab title="Fiabilité">Contenu de Fiabilité</Tab>
    <Tab title="Respect">Contenu de Respect</Tab>
    <Tab title="Service">Contenu de Service</Tab>
    <Tab title="Sécurité">Contenu de Sécurité</Tab>
  </Tabs>
);

export default App;
