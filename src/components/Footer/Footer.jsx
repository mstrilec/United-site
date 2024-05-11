import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/logo-contact.svg'
import footerFb from '../../assets/facebook-footer.svg'
import footerTg from '../../assets/telegram-footer.svg'
import arrowRight from '../../assets/arrow-right.svg'
import { ReactSVG } from 'react-svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-nav">
        <ReactSVG src={footerLogo} className='footer-logo' />

        <div className="footer-nav-items">
          <div className="footer-nav-item">
            <h6 className="nav-item-title">About</h6>
            <ul className='nav-item-list nav-item-list--mobile'>
              <li className='nav-item-list-item'>Markets</li>
              <li className='nav-item-list-item'>Buy Crypto<ReactSVG src={arrowRight} /></li>
              <li className='nav-item-list-item'>Markets</li>
              <li className='nav-item-list-item'>Spot<ReactSVG src={arrowRight} /></li>
              <li className='nav-item-list-item'>Futures<ReactSVG src={arrowRight} /></li>
              <li className='nav-item-list-item'>Learn<span className='navbar-item-soon'>coming soon</span></li>
            </ul>
          </div>

          <div className="footer-nav-item">
            <h6 className="nav-item-title">Contants</h6>
            <ul className='nav-item-list nav-item-list--mobile'>
              <li className='nav-item-list-item'>info@united.com</li>
              <li className='nav-item-list-item'>(406) 555-0120</li>
              <li className='nav-item-list-item'>(808) 555-0910</li>
              <li className='nav-item-list-item'>567 Pine Road, Riverdale, NY</li>
            </ul>

            <div className='footer-apps footer-apps--mobile'>
              <ReactSVG src={footerFb} />
              <ReactSVG src={footerTg} />
            </div>
          </div>

          <div className="footer-nav-item">
            <h6 className="nav-item-title">Futures information</h6>
            <ul className='nav-item-list nav-item-list--mobile'>
              <li className='nav-item-list-item'>Terms & conditions </li>
              <li className='nav-item-list-item'>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className='footer-text'>@2024</h3>
    </footer>
  )
}

export default Footer