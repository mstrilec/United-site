import React from 'react'
import { ReactSVG } from 'react-svg'
import logo from '../../assets/signInLogo.svg'
import Button from '../Button/Button'
import email from '../../assets/email.svg'
import key from '../../assets/key.svg'
// import leftVector from '../../assets/left-vector.png'
// import rightVector from '../../assets/right-vector.png'
import signUpBg from '../../assets/signUpBg.png'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import TimerLogin from '../TimerLogin/TimerLogin'


const SignUp = () => {
  return (
    <div className='signIn-page'>
      <div className='signIn-bg-block'>
          <img src={signUpBg} className='signIn-bg' />
      </div>
      <div className='signIn'>
        <TimerLogin />
        <span className='login-soon'>coming soon</span>
        <Link to='/home' className='signIn-logo'><ReactSVG src={logo} /></Link>

        <div className="signIn-block">
          <h3 className="signIn-title">Sign Up</h3>
          <h4 className="signIn-subtitle">Login to manage your account</h4>
          <div className="signIn-inputs">
            <Input
              placeholder='Email'
              link={email}
            />
            <Input
              placeholder='Password'
              link={key}
            />
            <Input
              placeholder='Confirm password'
              link={key}
            />
          </div>
          <Button
            name='Sign up'
            color='#C3C4C3'
            type='primary'
            width='385px'
            span='soon'
            corner='#fff'
            className='signIn-button'
            disabled={true}
          />
          <div className="signIn-stay-mobile">
            <input type="checkbox" id="stay" />
            <label htmlFor="stay" className='signIn-stay-text'>Stay logged in</label>
          </div>
          <p className='signIn-forgot'>Already have an account? <Link to='/login' className='header-button-link'><span className='signIn-signup'>Sign in</span></Link></p>
          <div className="signIn-stay">
            <input type="checkbox" id='stay' />
            <label htmlFor='stay' className='signIn-stay-text'>Stay logged in</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp