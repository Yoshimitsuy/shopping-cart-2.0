import React, { Component } from 'react'
import './LoginPage.css'

export default class LoginPage extends Component {
  render() {
    return (
      <main className="login-main">
        <div className="login-container">
          <div className='login-container-initial'>
            <h1>Login</h1>
            <div>
              <div>
                <label>
                  <i class="fa-solid fa-user"></i>
                  <input placeholder='Your name' id="username" type="text" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <i class="fa-solid fa-key"></i>
                  <input placeholder='Password' id="password" type="password" />
                </label>
              </div>
            </div>
          </div>
          <div className='login-container-final'>
            <div className="buttons">
              <div>
                <p>Register</p>
                <p>Forgot Password?</p>
              </div>
              <button>Login</button>
            </div>
            <div className='connect'>
              <p>Login with</p>
              <div>
                <p>facebook</p>
                <p>twitter</p>
                <p>google</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
