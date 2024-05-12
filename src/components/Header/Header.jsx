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
            textColor='#144026'
            corner='#fff'
            width='106px'
          />
        </Link>
        <Link to='/signup' className='header-button-link'>
          <Button
            name='Sign in'
            color='#277F4D'
            textColor='#FFF'
            corner='#fff'
            width='106px'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header