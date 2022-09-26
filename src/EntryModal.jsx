import React from 'react';

const EntryModal = ({show, entry, toggle}) => {
  var date = Date(entry.createdAt);
  if (show) {
    return (
      <div className="entry-modal-wrapper">
      <i class="fa-solid fa-rectangle-xmark close-icon" onClick={() => toggle(false)}></i>
      <div className="entry-modal-content">
        <div className="entry-image">
          <img src={entry.card.img} width="116px" height="200px" />
        </div>
      </div>
      <div className="entry-title">
        <div>
          {entry.title + ' : ' + entry.summary}
        </div>
        <div>
          Created {date.slice(0, 24)}
        </div>
      </div>
    </div>
    )
  } else {
    return null;
  }
}

export default EntryModal;