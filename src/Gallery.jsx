import React from 'react';
import cards from './cardfunc.jsx';
import GalleryImg from './GalleryImg.jsx';


const Gallery = ({show, toggle, cards}) => {
  if (show) {
    return (
      <div className="gallery-wrapper">
        {cards.map((card) => (
          <GalleryImg card={card}/>
        ))}
      </div>
    )
  }
  return null;
}
export default Gallery;