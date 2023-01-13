import React from 'react';

const ErrorModal = ({ show, error, toggle }) => {
  if (show) {
    if (error === 'useduser') {
      return (
      <div className="waite-wrapper" onClick={() => {toggle(false)}}>
        <div className="waite-info">
          <div>Error!</div>
          <div>Looks like this username is in use already. Please try a different one!</div>
        </div>
      </div>
      )
    } else if (error === 'badpass') {
      return (
      <div className="waite-wrapper" onClick={() => {toggle(false)}}>
      <div className="waite-info">
        <div>Error!</div>
        <div>This username and password combination does not match our records. Please try again!</div>
      </div>
    </div>
      )
    }
  } else {
    return null;
  }
}
export default ErrorModal;