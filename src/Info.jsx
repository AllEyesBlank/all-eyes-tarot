import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Info = ({show, user, toggle}) => {
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('')
  const handleSubmit = (u, o, n) => {
    return axios.put('/pass', { user: u, pass: o, new: n })
      .then((data) => {
        if (data.data === 'yep') {
          alert(`password changed for ${user}`)
          return;
        }
        if (data.data === 'nope') {
          setError('badpass');
          setShowError(true);
          return;
        }
      })
      .catch(() => {
        alert(`could not change password. please make sure you entered all information correctly.`)
      })
  }
  if (show) {
    return (
      <div className="waite-wrapper">
      <ErrorModal show={showError} error={error} toggle={setShowError(!showError)}/>
      <div className="waite-info">
        <div>Hi {user}!</div>
        <div className="waite-title">Reset Password:</div>
        <input type="password" placeholder="Old password..." onChange={(e) => {setOldPass(e.target.value)}}></input>
        <input type="password" placeholder="New password" onChange={(e) => {setNewPass(e.target.value)}}></input>
        <button onClick={() => handleSubmit(user, oldPass, newPass)}>Submit</button>
        <i class="fa-solid fa-rectangle-xmark close-icon" onClick={toggle}></i>
      </div>
    </div>
    )
  }
}
export default Info;