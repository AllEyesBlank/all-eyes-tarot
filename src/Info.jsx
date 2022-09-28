import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Info = ({show, user, toggle}) => {
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('');
  const handleSubmit = (u, o, n) => {
    axios.put('/pass', { user: u, pass: o, new: n })
      .then(() => {
        alert(`password changed for ${user}`)
        toggle();
        return;
      })
      .catch(() => {
        alert(`could not change password. please make sure you entered all information correctly.`)
      })
  }
  if (show) {
    return (
      <div className="waite-wrapper">
      <div className="waite-info">
        <div>Hi {user}!</div>
        <div className="waite-title">Reset Password:</div>
        <input type="text" placeholder="Old password..." onChange={(e) => {setOldPass(e.target.value)}}></input>
        <input type="text" placeholder="New password" onChange={(e) => {setNewPass(e.target.value)}}></input>
        <button onClick={() => handleSubmit(user, oldPass, newPass)}>Submit</button>
        <i class="fa-solid fa-rectangle-xmark close-icon" onClick={toggle}></i>
      </div>
    </div>
    )
  }
}
export default Info;