import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import { navbarList } from '../../navbarList'
import NavItem from '../NavItem/NavItem'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Navbar = ({ menuOpen }) => {
  const navbarStyle = menuOpen ? 'navbar open' : 'navbar'; 

  return (
    <>
      <nav className={navbarStyle}>
        <Link to='/home'><img src={logo} style={{ display: menuOpen ? 'none' : null}} /></Link>
        <div className={menuOpen ? 'navbar-list--open' : ''}>
          <ul className='navbar-list'>
            {navbarList.map((obj, index) => {
              return <NavItem obj={obj} key={index} menuOpen={menuOpen} />
            })}
          </ul>
          {menuOpen ? (
            <div className='header-buttons' style={{display: menuOpen ? 'flex' : '', flexDirection: 'column'}}>
              <Link to='/login' className='header-button-link'>
                <Button 
                  name='Log in'
                  color='#D6ECDF'
                  type='secondary'
                  corner='#fff'
                  width='100%'
                />
              </Link>
              <Link to='/signup' className='header-button-link'> 
                <Button
                  name='Sign in'
                  color='#277F4D'
                  type='primary'
                  corner='#fff'
                  width='100%'
                />
              </Link>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  )
}

export default Navbar