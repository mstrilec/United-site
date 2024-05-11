import React, { useState } from 'react'
import './BurgerMenu.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

const BurgerMenu = ({ setNavbarProps }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setNavbarProps({ menuOpen: !menuOpen });
  };

  return (
    <>
      <Link to='/home'><img src={logo} className='burger-menu-logo' /></Link>
      <div className='burger-menu' onClick={toggleMenu}>
        <div className={`burger-menu-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-menu-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-menu-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </>
  );
}

export default BurgerMenu