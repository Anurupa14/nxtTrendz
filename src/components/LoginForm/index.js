// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {name: '', password: '', isError: false}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {name, password} = this.state
    const userDetails = {name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      mode: 'no-cors',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    this.setState({isError: true})
  }

  render() {
    const {isError} = this.state
    return (
      <>
        <div className="loginRoute">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="loginPic"
          />
          <form onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />

            <label htmlFor="name">USERNAME</label>
            <input
              type="text"
              placeholder="Username"
              id="name"
              onChange={this.onChangeName}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="formBtn">
              Login
            </button>
            {isError && <p>WRONG!!</p>}
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
