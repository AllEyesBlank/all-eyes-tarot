import React, { useState, useEffect } from 'react';
import cards from './cardfunc.jsx';

const Reading = ({show, toggle, card}) => {
  if (show) {
    return (
      <div className="full-photo-modal">
        <div className="photo-modal-content">
          <div className="card-img">
        <img onClick={toggle} src={card.img}
        height='100%'
        width="100%" />
        </div>
        <div className="card-title">{card.title}</div>
        <div className="card-summary">{card.summary}</div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}
export default Reading;