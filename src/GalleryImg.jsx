import React from 'react';

const GalleryImg = ({card}) => {
  return (
    <div className="gallery-card">
      <img src={card.img} height="200px" width="100px" />
    </div>
  )
}

export default GalleryImg;