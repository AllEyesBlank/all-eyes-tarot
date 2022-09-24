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
          console.log('data we got: ', data)
          return this.setState({ entries: data.data })
      })
    }
  }

  render () {
    if (this.props.show) {
      return (
        <div className="archive-modal"> Hewwoooo
          {this.state.entries.map((entry) => (
            <ArchiveEntry entry={entry}/>
          ))}
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Archive;