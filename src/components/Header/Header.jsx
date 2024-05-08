import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-buttons'>
        <Link to='/login' className='header-button-link'>
          <Button 
            name='Log in'
            color='#D6ECDF'
            textColor='#144026'
          />
        </Link>
        <Button
          name='Sign in'
          color='#277F4D'
          textColor='#FFF'
        />
      </div>
    </header>
  )
}

export default Header