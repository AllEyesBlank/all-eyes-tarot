import React from 'react';

const InfoModal = ({show, card, toggle}) => {
  if (show) {
    return (
      <div className="reading-summary-wrapper" onClick={toggle}>
        <div className="reading-summary">{card.summary}
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default InfoModal;