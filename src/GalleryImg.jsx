import React, { useState, useEffect } from 'react';
import Reading from './Reading.jsx';

const GalleryImg = ({card}) => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Reading show={modal} card={card} toggle={() => {setModal(false).bind(this)}}/>
      <div className="gallery-card" onClick={() => {setModal(!modal)}}>
        <img src={card.img} height="125px" width="125px" />
      </div>
    </div>
  )
}

export default GalleryImg;