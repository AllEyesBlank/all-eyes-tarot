import React from 'react';

const ArchiveEntry = ({entry}) => {
  return (
    <div className="entry">
      <div>{entry.user}</div>
      <div>{entry.title}</div>
      <div>{entry.createdAt}</div>
    </div>
  )
}

export default ArchiveEntry;