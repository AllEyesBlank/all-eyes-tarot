import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EntryModal = ({user, show, entry, toggle}) => {
  const [deleted, setDeleted] = useState(false)
  const deleteOne = (obj) => {
    return axios.put('/entries', { body: { user: user, entry: obj }})
      .then(() => {
        setDeleted(true);
      })
  }
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
          Created {entry.createdAt};
        </div>
        <button onClick={() => {deleteOne(entry)}}>remove entry</button>
      </div>
    </div>
    )
  } else {
    return null;
  }
}

export default EntryModal;