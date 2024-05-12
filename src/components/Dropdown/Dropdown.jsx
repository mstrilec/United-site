import { Link } from 'react-router-dom';
import './Dropdown.css'

const Dropdown = ({ submenus, menuOpen, type }) => {
  return (
    <ul className={`dropdown-list${type ? type : ''}`}>
      {submenus.map((submenu, index) => (
        <Link href={submenu.url} className={`menu-item${type ? type : ''}`} key={index}>
          <li className={`menu-items${type ? type : ''}`}>
            {submenu.title}<span className='navbar-item-soon menu-item-soon'>soon</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Dropdown;