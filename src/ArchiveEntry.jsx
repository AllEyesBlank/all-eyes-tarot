import React, { useEffect, useState } from 'react';
import EntryModal from './EntryModal.jsx';

const ArchiveEntry = ({entry, user}) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="entry" onClick={() => setModal(!modal)}>
      <EntryModal user={user} show={modal} entry={entry} toggle={setModal.bind(this)}/>
      <div className="entry-card">{entry.card.title} <img src={entry.card.img} width="60px" height="60px"></img></div>
      <div>{entry.title}</div>
      <div>{(entry.summary.slice(0, 15) + '...')}</div>
    </div>
  )
}

export default ArchiveEntry;