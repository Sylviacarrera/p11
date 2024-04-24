import React from 'react';
import PropTypes from 'prop-types'; // Importez PropTypes pour valider les types des props
import '../style/Banner.scss';

const Banner = ({ sloganText, backgroundImage, showTitle }) => {
  return (
    <div className="banner">
      <section className="banner-slogan" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {showTitle && (
          <div className="slogan-background">
            <h1>{sloganText}</h1>
          </div>
        )}
      </section>
      {/* Le reste du contenu de la bannière... */}
    </div>
  );
};

// Définissez les types de props attendues et les valeurs par défaut si nécessaire
Banner.propTypes = {
  sloganText: PropTypes.string.isRequired, // La sloganText est requise et doit être une chaîne de caractères
  backgroundImage: PropTypes.string.isRequired, // L'image de fond est requise et doit être une chaîne de caractères (URL)
  showTitle: PropTypes.bool, // Le contrôle d'affichage du titre est facultatif et doit être un booléen
};

// Définissez une valeur par défaut pour le contrôle d'affichage du titre si nécessaire
Banner.defaultProps = {
  showTitle: true, // Afficher le titre par défaut, à moins qu'une autre valeur ne soit fournie
};

export default Banner;
