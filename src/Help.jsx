import React from 'react';

const Help = ({show, toggle}) => {
  if (show) {
    return (
      <div className="waite-wrapper" onClick={toggle}>
        <div className="waite-info">
          <div>Welcome! Thanks for using my tarot app. Here's a quick guide:</div>
          <div className="waite-title">On the Main Page:</div>
          <div>The icons at the bottom will sort for cards of only that type. These filters stack and they will control what cards are available for readings and for gallery viewing.</div>
          <div className="waite-title">In a Reading:</div>
          <div>The hand icon will display the artist's interpretation of the card and some thoughts behind the depiction. The book icon will give a reading based on A.E. Waite's "The Pictorial Key to the Tarot". The pen icon will allow you to jot down your thoughts on the card, which will save to your 'Journal' with the card and date and can be accessed any time. </div>
          <div>Please enjoy! - Alice</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
export default Help;