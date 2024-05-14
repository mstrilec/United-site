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
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Input from '../Input/Input'
import Button from '../Button/Button'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup'
import Terms from '../Terms/Terms'
import Policy from '../Policy/Policy'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePopupOpen = () => {
    document.querySelector('body')?.classList.add('scroll-off');
  }

  const handlePopupClose = () => {
    document.querySelector('body')?.classList.remove('scroll-off');
  }

  const [email, setEmail] = useState('');
  const isFormValid = email.trim() !== '';
  const notify = () => toast.success("Message sent");
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
  }

  return (
    <section className='footer-section'>
      <footer className='footer container-block mob-pad'>
        {!isMobile ? (
          <div className="footer-nav">
            <div className='footer-form'>
              <img src={footerLogoMobile} className='footer-logo' />
            </div>

            <div className="footer-nav-items">
              <div className="footer-nav-item">
                <h6 className="nav-item-title">About</h6>
                  <ul className='navbar-list-footer'>
                    {navbarList.map((obj, index) => {
                      return <NavItem obj={obj} key={index} type={'-footer'} footer={true} />
                    })}
                  </ul>
              </div>
              <div className="footer-nav-item">
                <h6 className="nav-item-title">Futures information</h6>
                <ul className='nav-item-list nav-item-list--mobile'>
                  <Popup 
                  trigger={<li className='nav-item-list-item terms-and-policy'>Terms & conditions </li>} 
                  modal
                  nested
                  onOpen={handlePopupOpen}
                  onClose={handlePopupClose}
                  >
                    {(close) => <Terms close={close} />}
                  </Popup>
                  <Popup 
                    trigger={<li className='nav-item-list-item terms-and-policy'>Privacy Policy</li>} 
                    modal
                    nested
                    onOpen={handlePopupOpen}
                    onClose={handlePopupClose}
                  >
                    {(close) => <Policy close={close} />}
                  </Popup>
                </ul>
              </div>

              <div className="footer-nav-item">
                <h6 className="nav-item-title">Contact Us</h6>
                <ul className='nav-item-list nav-item-list--mobile'>
                  <li className='nav-item-list-item'>info@united.com</li>
                </ul>

                <div className='footer-apps footer-apps--mobile'>
                  <Link to='https://www.facebook.com/vorticunited/'><ReactSVG src={footerFb} /></Link>
                  <Link to='https://t.me/vorticunited'><ReactSVG src={footerTg} /></Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='footer-mobile'>
            <div className="footer-form">
              <img src={footerLogoMobile} className='footer-logo' />
            </div>
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
              title="Contact Us"
              dropdown={
                <>
                  <ul className='nav-item-list nav-item-list--mobile'>
                    <li className='nav-item-list-item'>info@united.com</li>
                  </ul>
                </>
              }
            />
            <AccordionFooter
              title="Futures information"
              dropdown={
                <>
                  <ul className='nav-item-list nav-item-list--mobile'>
                    <Popup 
                      trigger={<li className='nav-item-list-item'>Terms & conditions </li>} 
                      modal
                      nested
                      onOpen={handlePopupOpen}
                      onClose={handlePopupClose}
                    >
                      {(close) => <Terms close={close} />}
                    </Popup>
                    <Popup 
                      trigger={<li className='nav-item-list-item'>Privacy Policy</li>} 
                      modal
                      nested
                      onOpen={handlePopupOpen}
                      onClose={handlePopupClose}
                    >
                      {(close) => <Policy close={close} />}
                    </Popup>
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