import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../style/Tabs.scss';

// Composant du menu déroulant
const DropdownMenu = ({ options }) => (
  <select>
    {options.map((option, index) => (
      <option key={index} value={option.value}>{option.label}</option>
    ))}
  </select>
);

// Le composant Tab prendra un titre, un contenu (children) et les options du menu déroulant
const Tab = ({ title, children, isSelected, onClick, dropdownOptions }) => (
  <div className="tab">
    <button onClick={onClick} className={`tab-button ${isSelected ? 'active' : ''}`}>
      {title}
      <FontAwesomeIcon icon={isSelected ? faChevronUp : faChevronDown} className="chevron" />
    </button>
    {isSelected && (
      <div className="tab-content">
        {children}
        {/* Afficher le menu déroulant si des options sont fournies */}
        {dropdownOptions && <DropdownMenu options={dropdownOptions} />}
      </div>
    )}
  </div>
);

// Le composant Tabs sera utilisé pour encapsuler les onglets et gérer lequel est actif
const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabStates, setTabStates] = useState(new Array(React.Children.count(children)).fill(false));

  const handleTabClick = (index) => {
    const newTabStates = [...tabStates];
    newTabStates[index] = !newTabStates[index];
    setTabStates(newTabStates);
    setSelectedTab(index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onClick: () => handleTabClick(index),
          isSelected: index === selectedTab && tabStates[index],
        }),
      )}
    </div>
  );
};

// Utilisation du composant Tabs avec Tab
const App = () => (
  <Tabs>
    <Tab title="Fiabilité" dropdownOptions={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]}>
      Contenu de Fiabilité
    </Tab>
    <Tab title="Respect" dropdownOptions={[{ label: 'Option 3', value: 'option3' }, { label: 'Option 4', value: 'option4' }]}>
      Contenu de Respect
    </Tab>
    <Tab title="Service" dropdownOptions={[{ label: 'Option 5', value: 'option5' }, { label: 'Option 6', value: 'option6' }]}>
      Contenu de Service
    </Tab>
    <Tab title="Sécurité" dropdownOptions={[{ label: 'Option 7', value: 'option7' }, { label: 'Option 8', value: 'option8' }]}>
      Contenu de Sécurité
    </Tab>
  </Tabs>
);

export default App;
