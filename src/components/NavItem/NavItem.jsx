import React, { useState } from 'react'
import './NavItem.css'
import Dropdown from '../Dropdown/Dropdown';
import { ReactSVG } from 'react-svg';
import arrow from '../../assets/arrow.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowUpWhite from '../../assets/arrow-up-white.svg'
import arrowDownWhite from '../../assets/arrow-down-white.svg'
import { Link } from 'react-router-dom';
import DropDownFooter from '../DropDownFooter/DropDownFooter';
import footerArrowRight from '../../assets/footer-arrow-right.svg'
import footerArrowLeft from '../../assets/left-chevron-svgrepo-com.svg'


const NavItem = ({ obj, index, menuOpen, type, footer }) => {
  const [dropdown, setDropdown] = useState(false);
  let iconUp = type ? arrowUpWhite : arrowUp;
  let iconDown = type ? arrowDownWhite : arrow;

  iconUp = footer ? footerArrowLeft : iconUp
  iconDown = footer ? footerArrowRight : iconDown

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
        className={menuOpen ? 'navbar-item-open' : `navbar-item${type ? type : ''}${footer ? ' navbar-item-li--footer' : ''}`}
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
        {dropdown && obj.dropdown && (
          !footer ? 
            <Dropdown submenus={obj.dropdown} menuOpen={menuOpen} type={type} /> 
            : <DropDownFooter submenus={obj.dropdown} menuOpen={menuOpen} type={type} />
        )}
      </li>
    </Link>
  );
}

export default NavItem