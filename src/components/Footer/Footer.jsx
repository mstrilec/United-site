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
              <ReactSVG src={footerLogo} className='footer-logo' />

                <form className='contact-container contact-container-footer' onSubmit={handleSubmit}>
                  <Input
                    placeholder='Email'
                    corner='#131514'
                    border='#7F7F7F'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pad='6px 0 6px 0'
                  />

                  <div className='contact-btn-block'>
                    <Button
                      name='Send'
                      color='#277F4D'
                      type='primary'
                      width='100%'
                      onClick={notify}
                      height='30px'
                      disabled={!isFormValid}
                    />
                  </div>
                </form>
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
                <h6 className="nav-item-title">Contact Us</h6>
                <ul className='nav-item-list nav-item-list--mobile'>
                  <li className='nav-item-list-item'>info@united.com</li>
                  <li className='nav-item-list-item'>567 Pine Road, Riverdale, NY</li>
                </ul>

                <div className='footer-apps footer-apps--mobile'>
                  <Link to='https://www.facebook.com/vorticunited/'><ReactSVG src={footerFb} /></Link>
                  <Link to='https://t.me/vorticunited'><ReactSVG src={footerTg} /></Link>
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
            <div className="footer-form">
              <img src={footerLogoMobile} className='footer-logo' />
              <form className='contact-container contact-container-footer' onSubmit={handleSubmit}>
                <Input
                  placeholder='Email'
                  corner='#131514'
                  border='#7F7F7F'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pad='6px 0 6px 0'
                />

                <div className='contact-btn-block'>
                  <Button
                    name='Send'
                    color='#277F4D'
                    type='primary'
                    width='100%'
                    onClick={notify}
                    height='30px'
                    disabled={!isFormValid}
                  />
                </div>
              </form>
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