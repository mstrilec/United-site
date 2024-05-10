import React from 'react'
import './Login.css'
import { ReactSVG } from 'react-svg'
import logo from '../../assets/signInLogo.svg'
import Button from '../Button/Button'
import email from '../../assets/email.svg'
import key from '../../assets/key.svg'
import signInBg from '../../assets/signIn-bg.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='signIn-page'>
      <div>
          <img src={signInBg} className='signIn-bg' />
      </div>
      <div className='signIn'>
        <Link to='/home' className='signIn-logo'><ReactSVG src={logo} /></Link>

        <div className="signIn-block">
          <h3 className="signIn-title">Sign In</h3>
          <h4 className="signIn-subtitle">Login to manage your account</h4>
          <div className="signIn-inputs">
            <label className="signIn-input">
              <ReactSVG src={email} className='signIn-input-img' />
              <input type="text" placeholder='Email' className='signIn-input-item' />
            </label>
            <label className="signIn-input">
              <ReactSVG src={key} className='signIn-input-img' />
              <input type="text" placeholder='Password' className='signIn-input-item' />
            </label>
          </div>
          <Button
            name='Sign in'
            color='#C3C4C3'
            textColor='#F9F9F9'
            width='385px'
            span='soon'
          />
          <p className='signIn-forgot'>Don't have an account? <Link to='/signup' className='header-button-link'><span className='signIn-signup'>Sign up</span></Link></p>
          <div className="signIn-stay">
            <input type="checkbox" id="stay" />
            <label htmlFor="stay" className='signIn-stay-text'>Stay logged in</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login