import React, { useState } from 'react'
import Dropdown from '../components/Dropdown/Dropdown';


const NavItem = ({ obj, index }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li key={index} className='navbar-item'>
      {obj.dropdown ? (
        <>
          {/* <button type="button" aria-haspopup="menu"> */}
            {obj.title}{' '}
          {/* </button>
          <Dropdown submenus={obj.dropdown} /> */}
        </>
      ) : (
        <>
          {obj.title} {obj.span ? <span className='navbar-item-soon'>{obj.span}</span> : null}
        </>
      )}
    </li>
  )
}

export default NavItem