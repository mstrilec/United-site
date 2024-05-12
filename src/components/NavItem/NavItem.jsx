import React, { useState } from 'react'
import './NavItem.css'
import Dropdown from '../Dropdown/Dropdown';
import { ReactSVG } from 'react-svg';
import arrow from '../../assets/arrow.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowUpWhite from '../../assets/arrow-up-white.svg'
import arrowDownWhite from '../../assets/arrow-down-white.svg'
import { Link } from 'react-router-dom';


const NavItem = ({ obj, index, menuOpen, type }) => {
  const [dropdown, setDropdown] = useState(false);
  const iconUp = type ? arrowUpWhite : arrowUp;
  const iconDown = type ? arrowDownWhite : arrow;

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <Link to={obj.to ? '/' + obj.to : ''} className={`navbar-item-link${type ? type : ''}`}>
      <li 
        key={index} 
        className={menuOpen ? 'navbar-item-open' : `navbar-item${type ? type : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`navbar-item-content${type ? type : ''}`}>
          {obj.title}{obj.span ? <span className='navbar-item-soon'>{obj.span}</span> : null}
          {obj.dropdown && (
            <ReactSVG
              src={dropdown ? iconUp : iconDown}
              className={`navbar-item-svg${dropdown ? ' navbar-item-svg--active' : ''}`}
              onClick={toggleDropdown}
            />
          )}
        </div>
        {dropdown && obj.dropdown && <Dropdown submenus={obj.dropdown} menuOpen={menuOpen} type={type} />}
      </li>
    </Link>
  );
}

export default NavItem