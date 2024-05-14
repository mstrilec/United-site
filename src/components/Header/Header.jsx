import React, { useState } from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
  const [navbarProps, setNavbarProps] = useState({});

  return (
    <header className='header container-block'>
      <Navbar {...navbarProps} />
      <BurgerMenu setNavbarProps={setNavbarProps} />
      <div className='header-buttons'>
        <Link to='/login' className='header-button-link'>
          <Button 
            name='Log in'
            color='#D6ECDF'
            type='secondary'
            corner='#fff'
            width='106px'
          />
        </Link>
        <Link to='/signup' className='header-button-link'>
          <Button
            name='Sign up'
            color='#277F4D'
            type='primary'
            corner='#fff'
            width='106px'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header