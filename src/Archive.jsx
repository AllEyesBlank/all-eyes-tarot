import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArchiveEntry from './ArchiveEntry.jsx';

const Archive = ({ user, toggle, show }) => {
  const [entries, setEntries] = useState([]);
  const [query, setQuery] = useState('');
  const [currentEntries, setCurrentEntries] = useState(entries)

  var handleSearch = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    axios.get(`/entries/${user}`)
      .then((data) => {
        setEntries(data.data);
      })
      .then(() => {
        const results = [];
        if (query.length > 0) {
          for (let i = 0; i < entries.length; i++) {
          let entry = entries[i];
            if (entry.title.indexOf(query) !== -1 || entry.summary.indexOf(query) !== -1 ) {
              results.push(entry);
            }
          }
          setCurrentEntries(results);
        } else {
          setCurrentEntries(entries);
        }
      })
  })

  if (show) {
    if (entries.length === 0) {
      return (
        <div className="archive-modal"> Hello, {user}!
          No entries yet!
          <i class="fa-solid fa-rectangle-xmark close-icon" onClick={toggle}></i>
        </div>
      )
    }
    return (
      <div className="archive-modal">
        <input type="text" placeholder="Search entries..." onChange={(e) => {handleSearch(e)}}></input>
        {currentEntries.map((entry) => (
          <ArchiveEntry entry={entry} user={user}/>
        ))}
        <i class="fa-solid fa-rectangle-xmark close-icon" onClick={toggle}></i>
      </div>
    )
  } else {
    return null;
  }
}


export default Archive;