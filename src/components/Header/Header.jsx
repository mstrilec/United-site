import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-buttons'>
        <Button 
          name='Log in'
          color='#D6ECDF'
          textColor='#144026'
        />
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