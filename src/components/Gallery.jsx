import React from 'react';
import PropTypes from 'prop-types';

function Gallery(props){
  return (
    <div className="gallery-card" onClick={() => {props.onGalleryItemSelection(props.imageId);}}>
      <style jsx>{`
        .gallery-card {
          width: 45%;
          padding: 1%;
        }
        .gallery-image {
          background-color: white;
          margin: 1%;
          width: 40px;
          overflow: hidden;
          margin: 10px 30%;
          zoom: 300%;
          object-fit: contain;
          object-position: 50% 50%;
        }
        `}</style>
      <img className="gallery-image" src={props.imageItself} alt={props.imageTitle} />
    </div>
  );
}

Gallery.propTypes = {
  imageSource: PropTypes.string,
  imageTitle: PropTypes.string,
  imageItself: PropTypes.element,
  imageId: PropTypes.string,
  onGallerySelection: PropTypes.func
};

export default Gallery;