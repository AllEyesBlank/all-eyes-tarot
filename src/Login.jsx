import React from 'react';
import loginimg from './../tarot/headshop.png';
import titleImg from './../tarot/alleyestitle.png';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pass: '',
    }
  }
  // componentDidMount () {
  //   return axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/')
  //     .then((data) => {
  //       console.log('tarot API data: ', data);
  //     })
  // }
  setUsername(e) {
    this.setState({ user: e.target.value })
  }

  setPassword(e) {
    this.setState({ pass: e.target.value })
  }

  handleSubmit(user, pass) {
    return axios.put('/user', { user: user, pass: pass  })
      .then((data) => {
        if (data.data === 'verified') {
          this.setState({ user: '', pass: '' })
          this.props.toggle(user);
        } else {
          alert('username or password are not recognized.')
        }
      })
  }

  handleCreate(user, pass) {
    return axios.post('/user', { user: user, pass: pass})
      .then((data) => {
        if (data.data === 'username in use') {
          alert('username is already in use.')
        } else {
          alert(`new user ${user} created!`)
          this.setState({ user: '', pass: '' })
          this.props.toggle(user);
        }
      })
  }

  render() {
    if (this.props.show) {
      return (
        <div className="login-page">
          <div className="login-wrapper">
          <img src={titleImg}></img>
            <div className="username-input">
              <input type="text" onChange={this.setUsername.bind(this)} placeholder="Username"></input>
              <input type="password" onChange={this.setPassword.bind(this)} placeholder="Password"></input>
            </div>
            <div className="login-buttons">
            <button className="login-button" onClick={(e) => this.handleSubmit(this.state.user, this.state.pass)}> login </button>
            <button className="login-button" onClick={(e) => this.handleCreate(this.state.user, this.state.pass)}> create </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default Login;