import React, { useState } from 'react'
import './NavItem.css'
import Dropdown from '../Dropdown/Dropdown';
import { ReactSVG } from 'react-svg';
import arrow from '../../assets/arrow.svg'
import arrowUp from '../../assets/arrow-up.svg'
import { Link } from 'react-router-dom';


const NavItem = ({ obj, index }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <Link className='navbar-item-link'>
      <li key={index} className='navbar-item'>
        <div className="navbar-item-content">
          {obj.title}{obj.span ? <span className='navbar-item-soon'>{obj.span}</span> : null}
          {obj.dropdown && (
            <ReactSVG
              src={dropdown ? arrowUp : arrow}
              className={`navbar-item-svg${dropdown ? ' navbar-item-svg--active' : ''}`}
              onClick={toggleDropdown}
            />
          )}
        </div>
        {dropdown && obj.dropdown && <Dropdown submenus={obj.dropdown} />}
      </li>
    </Link>
  );
}

export default NavItem