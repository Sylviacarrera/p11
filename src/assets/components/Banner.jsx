import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/Banner.scss';

const Banner = ({ sloganText, backgroundImage, images, showTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isCarousel = Array.isArray(images) && images.length > 1;

  const nextImage = () => {
    if (isCarousel) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (isCarousel) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const backgroundStyle = isCarousel
    ? { backgroundImage: `url(${images[currentImageIndex]})` }
    : { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="banner">
      {isCarousel && (
        <div className="carousel-controls">
          <i className="fas fa-chevron-left" onClick={prevImage}></i>
          <i className="fas fa-chevron-right" onClick={nextImage}></i>
        </div>
      )}
      <section className="banner-slogan" style={backgroundStyle}>
        {showTitle && (
          <div className="slogan-background">
            <h1>{sloganText}</h1>
          </div>
        )}
      </section>
    </div>
  );
};

Banner.propTypes = {
  sloganText: PropTypes.string,
  backgroundImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  showTitle: PropTypes.bool,
};

Banner.defaultProps = {
  showTitle: true,
};

export default Banner;
