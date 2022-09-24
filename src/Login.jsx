import React from 'react';
import loginimg from './../tarot/headshop.png'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pass: '',
    }
  }

  setUsername(e) {
    this.setState({ user: e.target.value })
  }

  setPassword(e) {
    this.setState({ pass: e.target.value })
  }

  render() {
    if (this.props.show) {
      return (
        <div className="login-page">
          <div className="login-wrapper">
              <img src={loginimg}></img>
          <div className="Input">
            <input type="text" onChange={this.setUsername.bind(this)} placeholder="Username"></input>
          </div><div className="Input">
            <input type="text" onChange={this.setPassword.bind(this)} placeholder="Password"></input>
          </div>
          <button onClick={(e) => this.props.toggle(e, this.state.user)}> submit </button>
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