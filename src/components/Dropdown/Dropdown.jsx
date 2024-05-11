import { Link } from 'react-router-dom';
import './Dropdown.css'

const Dropdown = ({ submenus, menuOpen }) => {
  return (
    <ul className="dropdown-list">
      {submenus.map((submenu, index) => (
        <Link href={submenu.url} className='menu-item' key={index}>
          <li className="menu-items">
            {submenu.title}<span className='navbar-item-soon menu-item-soon'>soon</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Dropdown;