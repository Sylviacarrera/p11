import '../style/Presentation.scss';
import Rating from './Rating';
import Dropdown from './Dropdown';

const LogementDetails = ({ title, location, tags, host, rating, description, equipments }) => {

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
          <Rating data={rating} />
        </div>
        <div className="dropdown-container">
        <Dropdown item={{ title: 'Description', description: description }} />
          <Dropdown item={{ title: 'Equipements', description: equipments }} />

        </div>
        </div>
 
    </div>
  );
};

export default LogementDetails;
