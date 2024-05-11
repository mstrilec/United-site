import React, { useState } from 'react'
import './BurgerMenu.css'
import logo from '../../assets/Logo.png'

const BurgerMenu = ({ setNavbarProps }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setNavbarProps({ menuOpen: !menuOpen });
  };

  return (
    <>
      <img src={logo} className='burger-menu-logo' />
      <div className='burger-menu' onClick={toggleMenu}>
        <div className={`burger-menu-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-menu-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-menu-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </>
  );
}

export default BurgerMenu