import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import { navbarList } from '../../navbarList'
import NavItem from '../NavItem/NavItem'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/home'><img src={logo} alt="Logo" /></Link>
      <ul className='navbar-list'>
        {navbarList.map((obj, index) => {
          return <NavItem obj={obj} key={index} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar