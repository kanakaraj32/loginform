import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {user: '', password: ''}

  change = e => {
    this.setState({user: e.target.value})
  }

  password = e => {
    this.setState({password: e.target.value})
    console.log(e.target.value)
  }

  submit = async e => {
    e.preventDefault()
    const {user, password} = this.state
    const details = {user, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, option)
    const body = await response.json()
    console.log(body)
  }

  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="image"
        />
        <form className="form" onSubmit={this.submit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="input">
            <label htmlFor="raj">UserName</label>
            <input type="text" id="raj" onChange={this.change} />
          </div>
          <div className="input">
            <label htmlFor="raju">Password</label>
            <input type="password" id="raju" onChange={this.password} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
