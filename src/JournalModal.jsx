import React from 'react';
import axios from 'axios';

class JournalModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      summary: '',
    }
  }
  post () {
    return axios.post('/entries', { body: { user: this.props.user, title: this.state.title, summary: this.state.summary, createdAt: Date.now() }})
      .then(() => {
        console.log('posted!')
      })
  }
  render() {
    if (this.props.show) {
      return (
        <div className="journal-modal-wrapper">
          <div className="journal-modal-content">
            <div className="journal-image">
              <img src={this.props.card.img} width="116px" height="200px" />
            </div>
          </div>
          <div className="journal-title">
              <input type="text" placeholder="Title..."></input>
          </div>
          <textarea className="journal-summary" cols="52" rows="20" placeholder="Write your thoughts here..."></textarea>
          <button onClick={this.post.bind(this)}><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      )
    } else {
      return null;
    }
  }
}
export default JournalModal;