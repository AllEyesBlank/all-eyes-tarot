import React, { useState, useEffect } from 'react';
import cards from './cardfunc.jsx';
import InfoModal from './InfoModal.jsx';
import JournalModal from './JournalModal.jsx';
import WaiteModal from './WaiteModal.jsx';


const GalleryReading = ({show, toggle, card, user}) => {
  const [modal, setModal] = useState(false);
  const [write, setWrite] = useState(false);
  const [waite, setWaite] = useState(false);
  if (show) {
    return (
      <div className="full-photo-modal">
        <div className="photo-modal-content">
        <div className="icon-holder">
        <i className="fa-solid fa-hand-sparkles reading-icon" onClick={() => setModal(!modal)}></i>
        <i className="fa-solid fa-pen-nib writing-icon" onClick={() => {setWrite(!write)}}></i>
        <i class="fa-solid fa-book-open waite-icon" onClick={() => {setWaite(!waite)}}></i>
        </div>
        <InfoModal show={modal} card={card} toggle={setModal.bind(this)}/>
        <JournalModal show={write} card={card} user={user} toggle={setWrite.bind(this)} />
        <WaiteModal show={waite} card={card} toggle={setWaite.bind(this)}/>
          <div className="card-img">
            <img onClick={toggle} src={card.img}
            height='100%'
            width="100%" />
          </div>
        <div className="card-title">{card.title}</div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}
export default GalleryReading;