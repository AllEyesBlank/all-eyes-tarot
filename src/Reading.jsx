import React, { useState, useEffect } from 'react';
import cards from './cardfunc.jsx';
import InfoModal from './InfoModal.jsx';

const Reading = ({show, toggle, card}) => {
  const [modal, setModal] = useState(false);
  if (show) {
    return (
      <div className="full-photo-modal">
        <div className="photo-modal-content">
        <div className="icon-holder">
        <i className="fa-solid fa-hand-sparkles reading-icon" onClick={() => setModal(!modal)}></i>
        <i className="fa-solid fa-pen-nib writing-icon"></i>
        </div>
        <InfoModal show={modal} card={card} toggle={() => {setModal.bind(this)}}/>
          <div className="card-img">
            <img onClick={toggle} src={card.img}
            height='100%'
            width="100%" />
          </div>
        <div className="card-title">{card.title}</div>
        {/* <div className="card-summary">{card.summary}</div> */}
        </div>
      </div>
    )
  } else {
    return null;
  }
}
export default Reading;