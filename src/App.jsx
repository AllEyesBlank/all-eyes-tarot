import React from 'react';
import Login from './Login.jsx';
import Reading from './Reading.jsx';
import Gallery from './Gallery.jsx';
import Archive from './Archive.jsx';
import cards from './cardfunc.jsx';
import SorterIcons from './SorterIcons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldUser: '',
      user: '',
      showLogin: true,
      showReading: false,
      showGallery: false,
      showArchive: false,
      currentCard: '',
      currentCards: cards,
      noFilters: true,
      swordFilter: false,
      cupFilter: false,
      coinFilter: false,
      wandFilter: false,
      majorFilter: false,
    }
  }

  componentDidUpdate() {
    if (this.state.currentCards.length === 0) {
      this.setState({ currentCards: cards, noFilters: true })
    }
    if (this.state.user !== this.state.oldUser) {
      this.setState({ oldUser: this.state.user });
    }
  }

  toggleLogin(e, username) {
    e.preventDefault();
    console.log('logged in as ', username);
    this.setState({ showLogin: !this.state.showLogin, user: username });
  }

  toggleReading(e) {
    e.preventDefault();
    this.setState({ showReading: !this.state.showReading, currentCard: this.state.currentCards[(Math.floor(Math.random() * this.state.currentCards.length))] });
  }

  toggleGallery(e) {
    e.preventDefault();
    this.setState({ showGallery: !this.state.showGallery })
  }

  toggleArchive(e) {
    console.log('boom baby')
    e.preventDefault();
    this.setState({ showArchive: !this.state.showArchive })
  }

  wandFilter() {
    if (this.state.noFilters) {
      this.setState({ currentCards: cards.slice(0, 14), noFilters: false, wandFilter: true})
    } else {
      var currentSet = this.state.currentCards;
      if (!this.state.wandFilter) {
        this.setState({ currentCards: currentSet.concat(cards.slice(0, 14)), wandFilter: true })
      } else {
        for (let i = 0; i < currentSet.length; i++) {
          if (currentSet[i].title.indexOf('Wands') !== -1) {
            currentSet.splice(i, 1);
            i--;
          }
        }
        this.setState({ currentCards: currentSet, wandFilter: false })
      }
    }
  }

  swordFilter() {
    if (this.state.noFilters) {
      this.setState({ currentCards: cards.slice(42, 56), noFilters: false, swordFilter: true})
    } else {
      var currentSet = this.state.currentCards;
      if (!this.state.swordFilter) {
        this.setState({ currentCards: currentSet.concat(cards.slice(42, 56)), swordFilter: true })
      } else {
        for (let i = 0; i < currentSet.length; i++) {
          if (currentSet[i].title.indexOf('Swords') !== -1) {
            currentSet.splice(i, 1);
            i--;
          }
        }
        this.setState({ currentCards: currentSet, swordFilter: false })
      }
    }
  }

  cupFilter() {
    if (this.state.noFilters) {
      this.setState({ currentCards: cards.slice(14, 28), noFilters: false, cupFilter: true})
    } else {
      console.log('cuppin')
      var currentSet = this.state.currentCards;
      if (!this.state.cupFilter) {
        this.setState({ currentCards: currentSet.concat(cards.slice(14, 28)), cupFilter: true })
      } else {
        for (let i = 0; i < currentSet.length; i++) {
          if (currentSet[i].title.indexOf('Cups') !== -1) {
            currentSet.splice(i, 1);
            i--;
          }
        }
        this.setState({ currentCards: currentSet, cupFilter: false })
      }
    }
  }

  coinFilter() {
    if (this.state.noFilters) {
      this.setState({ currentCards: cards.slice(28, 42), noFilters: false, coinFilter: true})
    } else {
      var currentSet = this.state.currentCards;
      if (!this.state.coinFilter) {
        this.setState({ currentCards: currentSet.concat(cards.slice(28, 42)), coinFilter: true })
      } else {
        for (let i = 0; i < currentSet.length; i++) {
          if (currentSet[i].title.indexOf('Coins') !== -1) {
            currentSet.splice(i, 1);
            i--;
          }
        }
        this.setState({ currentCards: currentSet, coinFilter: false })
      }
    }
  }

  majorSorter() {
    if (this.state.noFilters) {
      this.setState({ currentCards: cards.slice(56, 65), noFilters: false, majorFilter: true})
    } else {
      var currentSet = this.state.currentCards;
      if (!this.state.majorFilter) {
        this.setState({ currentCards: currentSet.concat(cards.slice(56, 65)), majorFilter: true })
      } else {
        for (let i = 0; i < currentSet.length; i++) {
          if (currentSet[i].title.indexOf('The') !== -1 || currentSet[i].title === 'Adjustment') {
            currentSet.splice(i, 1);
            i--;
          }
        }
        this.setState({ currentCards: currentSet, majorFilter: false })
      }
    }
  }

  render() {
    return (
      <div className="total-wrap">
        <Reading show={this.state.showReading} toggle={this.toggleReading.bind(this)} card={this.state.currentCard} user={this.state.user}/>
        <div className="wrapper">
          <Login show={this.state.showLogin} toggle={this.toggleLogin.bind(this)} />
          <Gallery show={this.state.showGallery} toggle={this.toggleGallery.bind(this)} cards={this.state.currentCards} />
          <Archive show={this.state.showArchive} toggle={this.toggleArchive.bind(this)} user={this.state.user}/>
          <div className="button-panel">
            <button onClick={this.toggleReading.bind(this)}> Get a Reading </button>
            <button onClick={this.toggleGallery.bind(this)}> See All Cards </button>
            <button onClick={this.toggleArchive.bind(this)}> Journal </button>
            <button onClick={this.toggleLogin.bind(this)}> Log Out </button>
            <div className="sorter-icons">
              <SorterIcons icon={'wand'} toggle={this.wandFilter.bind(this)} clicked={this.state.wandFilter}/>
              <SorterIcons icon={'cup'} toggle={this.cupFilter.bind(this)} clicked={this.state.cupFilter}/>
              <SorterIcons icon={'major'} toggle={this.majorSorter.bind(this)} clicked={this.state.majorFilter}/>
              <SorterIcons icon={'coin'} toggle={this.coinFilter.bind(this)} clicked={this.state.coinFilter}/>
              <SorterIcons icon={'sword'} toggle={this.swordFilter.bind(this)} clicked={this.state.swordFilter}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;