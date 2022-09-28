import React, { useState, useEffect } from 'react';
import GalleryReading from './GalleryReading.jsx';

const GalleryImg = ({card, user}) => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <GalleryReading show={modal} card={card} toggle={() => {setModal(false).bind(this)}} user={user}/>
      <div className="gallery-card" onClick={() => {setModal(!modal)}}>
        <img src={card.img} height="125px" width="125px" />
      </div>
    </div>
  )
}

export default GalleryImg;