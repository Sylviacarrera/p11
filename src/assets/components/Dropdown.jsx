import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../style/Dropdown.scss';

const DropdownMenu = ({ options }) => (
  <div className="dropdown-menu">
    {options.map((option, index) => (
      <div key={index} className="dropdown-item">
        {option.label}
      </div>
    ))}
  </div>
);

const Tab = ({ title, children, isSelected, toggleTab, dropdownOptions }) => (
  <div className="tab">
    <button onClick={toggleTab} className={`tab-button ${isSelected ? 'active' : ''}`}>
      {title}
      <FontAwesomeIcon icon={isSelected ? faChevronUp : faChevronDown} className="chevron" />
    </button>
    {isSelected && (
      <div className="tab-content">
        {children}
        {dropdownOptions && <DropdownMenu options={dropdownOptions} />}
      </div>
    )}
  </div>
);

const Tabs = ({ children }) => {
  const [openTabs, setOpenTabs] = useState({});

  const toggleTab = (index) => {
    setOpenTabs(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="tabs-container">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          toggleTab: () => toggleTab(index),
          isSelected: !!openTabs[index]
        })
      )}
    </div>
  );
};

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
