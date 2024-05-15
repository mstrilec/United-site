import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Countdown from '../Countdown/Countdown'
import './Main.css'
import arrowDiagonal from '../../assets/arrowDiagonal.svg'
import user1 from '../../assets/users/Avatar1.png'
import user2 from '../../assets/users/Avatar2.png'
import user3 from '../../assets/users/Avatar3.png'
import user4 from '../../assets/users/Avatar4.png'
import Product from '../Product/Product'
import rocket from '../../assets/rocket.svg'
import target from '../../assets/target.svg'
import dandruff from '../../assets/dandruff.svg'
import telegram from '../../assets/Telegram.svg'
import facebook from '../../assets/Facebook.svg'
import tradePc from '../../assets/TradePC.png'
import tradeMobile from '../../assets/TradeMobile.png'
import tradingForMobile from '../../assets/trading-for-mob-mobile.svg'
import tradingForPc from '../../assets/trading-for-mob-pc.svg'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'

const Main = () => {
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

  const width = !isMobile ? '182px' : '100%'

  return (
    <main className='main'>
      <div className='main-block'>
        <div className="main-block-left-side">
          <div className="main-title-subtitle">
            <h2 className='main-title'>Low fees,<br /><span className='main-title-second'>high perfomance</span></h2>
            <p className='main-subtitle'>Join the new era of copy trading with 100k active users worldwide and trade 150+ crypto
            currencies with a trusted trader.</p>
          </div>
          <div className='main-investing-block'>
            <Link to='/trading'>
              <Button
                name='Start investing'
                color='#277F4D'
                type='primary'
                rightSvg={arrowDiagonal}
                corner='#fff'
                fix='fix-button-corners'
                width='226px'
              />
            </Link>
            <div className="main-users">
              <div className="users">
                <img src={user1} alt="User" className='user1' />
                <img src={user2} alt="User" className='user2' />
                <img src={user3} alt="User" className='user3' />
                <img src={user4} alt="User" className='user4' />
              </div>
              <div className='main-users-block'>
                <p className='main-users-text'>100k+</p>
                <p className='main-users-subtext'>active users</p>
              </div>
            </div>
          </div>
        </div>

        <div className='main-block-images'>
          <img src={tradingForPc} className='trade-pc-for-pc' />
          <img src={tradingForMobile} className='trade-mobile-for-mobile' />
          <img src={tradeMobile} alt="Trade" className='trade-mobile' />
          <img src={tradePc} alt="Trade" className='trade-pc' />
        </div>
      </div>

      <section className="main-launching">
        <h2 className='main-launching-text'>Launching in</h2>

        <Countdown />

        <Link to='/signup'>
          <Button
            name='Join now'
            color='#277F4D'
            type='primary'
            width='137px'
          />
        </Link>
      </section>

      <section className='main-products'>
        <h2 className='main-products-text'>Discover Our Products</h2>
        <div className='discover-items'>
          <div className="products">
            <div className="product-item">
              <Product 
                img={target}
                title='Copy Trading'
                subtitle='No. 1 In Copy Execution Time'
                text='Best orderflow traders on our platform'
              />
            </div>
            <div className="product-item">
              <Product 
                img={dandruff}
                title='Spot'
                subtitle='Abundant Crypto. 0 Trading Fees'
                text='Fast Listings, Diverse Trading Pairs & Robust Trading Depth'
              />
            </div>
            <div className="product-item">
              <Product 
                img={rocket}
                title='United Benefits'
                subtitle='Massive Airdrops, Free Participation'
                text={
                  <>
                    Automatically participate in massive airdrops and <br/>
                    enjoy trading fee discounts
                  </>
                }
              />
            </div>
          </div>
          <Link to='/signup'>
            <Button
              name='Join now'
              color='#277F4D'
              type='primary'
              corner='#fff'
              width='137px'
            />
          </Link>
        </div>
      </section>

      <section className='main-join-block'>
        <h2 className='main-join-title'>Join the United Community Today</h2>
        <h4 className='main-join-subtitle'>Always there for you</h4>

        <div className='main-join-buttons'>
          <Link to='https://www.facebook.com/vorticunited/' className='button-link'>
            <Button
              name='Facebook'
              color='#D6ECDF'
              type='secondary'
              leftSvg={facebook}
              corner='#319f60'
              style='join-mobile-button'
              width={width}
            />
          </Link>
          <Link to='https://t.me/vorticunited' className='button-link'>
            <Button
              name='Telegram'
              color='#D6ECDF'
              type='secondary'
              leftSvg={telegram}
              corner='#319f60'
              style='join-mobile-button'
              width={width}
            />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Main