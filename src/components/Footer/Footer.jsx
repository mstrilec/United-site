import React, { useEffect, useState } from 'react'
import './Footer.css'
import footerLogo from '../../assets/logo-contact.svg'
import footerFb from '../../assets/facebook-footer.svg'
import footerTg from '../../assets/telegram-footer.svg'
import arrowRight from '../../assets/arrow-right.svg'
import { ReactSVG } from 'react-svg'
import AccordionFooter from '../AccordionFooter/AccordionFooter'
import footerLogoMobile from '../../assets/footer-logo.png'
import NavItem from '../NavItem/NavItem'
import { navbarList } from '../../navbarList'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1265);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1265);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='footer-section'>
      <footer className='footer container-block'>
        {!isMobile ? (
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
        ) : (
          <div className='footer-mobile'>
            <img src={footerLogoMobile} className='footer-logo' />
            <AccordionFooter
              title="About"
              dropdown={
                <>
                  <ul className='navbar-list-footer'>
                    {navbarList.map((obj, index) => {
                      return <NavItem obj={obj} key={index} type={'-footer'} />
                    })}
                  </ul>
                </>
              }
            />
            <AccordionFooter
              title="Contacts"
              dropdown={
                <>
                  <ul className='nav-item-list nav-item-list--mobile'>
                    <li className='nav-item-list-item'>info@united.com</li>
                    <li className='nav-item-list-item'>(406) 555-0120</li>
                    <li className='nav-item-list-item'>(808) 555-0910</li>
                    <li className='nav-item-list-item'>567 Pine Road, Riverdale, NY</li>
                  </ul>
                </>
              }
            />
            <AccordionFooter
              title="Futures information"
              dropdown={
                <>
                  <ul className='nav-item-list nav-item-list--mobile'>
                    <li className='nav-item-list-item'>Terms & conditions </li>
                    <li className='nav-item-list-item'>Privacy Policy</li>
                  </ul>
                </>
              }
            />
          </div>
        )}
        <h3 className='footer-text'>@2024</h3>
      </footer>
    </section>
  )
}

export default Footer