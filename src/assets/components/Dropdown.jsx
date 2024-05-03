import { useState } from 'react';
import '../style/Dropdown.scss';

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const description = (data) => (
    <p className="dropdown-description">
      {Array.isArray(data) ? (
        data.map((element) => (
          <span key={element}>
            {element}
            <br />
          </span>
        ))
      ) : (
        data
      )}
    </p>
  );

  return (
    <div className="dropdown-menu">
      <div className="tab">
        <button onClick={() => setIsOpen(!isOpen)}>
          {item.title}
          <i className={`chevron fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </button>
      </div>
      {isOpen && description(item.description)}
    </div>
  );
};

export default Dropdown;
