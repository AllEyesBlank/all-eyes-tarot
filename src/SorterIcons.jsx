import React from 'react';

const SorterIcons = ({icon, toggle, clicked}) => {
  if (icon === 'wand') {
    if (clicked) {
      return (
        <i className="fa-solid fa-wand-sparkles sorter-icon-clicked" onClick={toggle}></i>
      )
    }
    return (
      <i className="fa-solid fa-wand-sparkles sorter-icon" onClick={toggle}></i>
    )
  } else if (icon === 'cup') {
    if (clicked)  {
      return (
        <i className="fa-solid fa-mug-hot sorter-icon-clicked" onClick={toggle}></i>
        )
    }
    return (
      <i className="fa-solid fa-mug-hot sorter-icon" onClick={toggle}></i>
    )
  } else if (icon === 'major') {
    if (clicked) {
      return (
        <i className="fa-solid fa-eye sorter-icon-clicked" onClick={toggle}></i>
      )
    }
    return (
      <i className="fa-solid fa-eye sorter-icon" onClick={toggle}></i>
    )
  } else if (icon === 'coin') {
    if (clicked) {
      return (
        <i className="fa-solid fa-coins sorter-icon-clicked" onClick={toggle}></i>
      )
    }
    return (
      <i className="fa-solid fa-coins sorter-icon" onClick={toggle}></i>
    )
  } else if (icon === 'sword') {
    if (clicked) {
      return (
        <i className="fa-solid fa-scissors sorter-icon-clicked" onClick={toggle}></i>
      )
    }
    return (
      <i className="fa-solid fa-scissors sorter-icon" onClick={toggle}></i>
    )
  }
}

export default SorterIcons;