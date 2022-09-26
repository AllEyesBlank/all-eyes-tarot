import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArchiveEntry from './ArchiveEntry.jsx';

class Archive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: undefined,
      entries: [],
    }
  }

  componentDidUpdate () {
    if (this.props.user !== this.state.newUser) {
      this.setState({ newUser: this.props.user });
      return axios.get(`/entries/${this.props.user}`)
        .then((data) => {
          return this.setState({ entries: data.data })
      })
    }
  }

  render () {
    if (this.props.show) {
      if (this.state.entries.length === 0) {
        return (
          <div className="archive-modal"> Hello, {this.props.user}!
          No entries yet!
          <i class="fa-solid fa-rectangle-xmark close-icon" onClick={this.props.toggle}></i>
        </div>
        )
      }
      return (
        <div className="archive-modal"> Hello, {this.props.user}!
          {this.state.entries.map((entry) => (
            <ArchiveEntry entry={entry}/>
          ))}
          <i class="fa-solid fa-rectangle-xmark close-icon" onClick={this.props.toggle}></i>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Archive;