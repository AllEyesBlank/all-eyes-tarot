import React from 'react';
import Login from './Login.jsx';
import Reading from './Reading.jsx';
import Gallery from './Gallery.jsx';
import Archive from './Archive.jsx';
import cards from './cardfunc.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: true,
      showReading: false,
      showGallery: false,
      currentCard: '',
    }
  }

  toggleLogin(e) {
    e.preventDefault();
    this.setState({ showLogin: !this.state.showLogin });
  }

  toggleReading(e) {
    e.preventDefault();
    this.setState({ showReading: !this.state.showReading, currentCard: cards[(Math.floor(Math.random() * 65))] });
  }

  toggleGallery(e) {
    e.preventDefault();
    this.setState({ showGallery: !this.state.showGallery })
  }

  render() {
    return (
      <div>
        <Reading show={this.state.showReading} toggle={this.toggleReading.bind(this)} card={this.state.currentCard}/>
        <div className="wrapper">
        <Login show={this.state.showLogin} toggle={this.toggleLogin.bind(this)}/>
        <Gallery show={this.state.showGallery} toggle={this.toggleGallery.bind(this)} cards={cards}/>
        <Archive />
        <div className="button-panel">
          <button onClick={this.toggleReading.bind(this)}> Get a Reading </button>
          <button onClick={this.toggleGallery.bind(this)}> See All Cards </button>
          <button> Journal </button>
          <button onClick={this.toggleLogin.bind(this)}> Log Out </button>
        </div>
        </div>
      </div>
    )
  }
}

export default App;