import React from 'react'
import Button from '../Button/Button'
import './Main.css'
import arrowDiagonal from '../../assets/arrowDiagonal.svg'
import user1 from '../../assets/users/Avatar1.png'
import user2 from '../../assets/users/Avatar2.png'
import user3 from '../../assets/users/Avatar3.png'
import user4 from '../../assets/users/Avatar4.png'
import Product from '../Product/Product'
import rocket from '../../assets/rocket.png'
import target from '../../assets/target.png'
import dandruff from '../../assets/dandruff.png'
import telegram from '../../assets/Telegram.svg'
import facebook from '../../assets/Facebook.svg'
import tradePc from '../../assets/TradePC.png'
import tradeMobile from '../../assets/TradeMobile.png'

const Main = () => {
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
            <Button
              name='Start investing'
              color='#277F4D'
              textColor='#FFF'
              rightSvg={arrowDiagonal}
            />
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

        <img src={tradeMobile} alt="Trade" className='trade-mobile' />
        <img src={tradePc} alt="Trade" className='trade-pc' />
      </div>

      <section className="main-launching">
          <h2 className='main-launching-text'>Launching in</h2>
      </section>

      <section className='main-products'>
        <h2 className='main-products-text'>Discover Our Products</h2>
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
              text='Automatically participate in massive airdrops and enjoy trading fee discounts'
            />
          </div>
        </div>
        <Button
          name='Join now'
          color='#277F4D'
          textColor='#FFF'
        />
      </section>

      <section className='main-join-block'>
        <h2 className='main-join-title'>Join the United Community Today</h2>
        <h4 className='main-join-subtitle'>Always there for you</h4>

        <div className='main-join-buttons'>
          <Button
            name='Facebook'
            color='#D6ECDF'
            textColor='#1D5F3A'
            leftSvg={facebook}
          />
          <Button
            name='Telegram'
            color='#D6ECDF'
            textColor='#1D5F3A'
            leftSvg={telegram}
          />
        </div>
      </section>
    </main>
  )
}

export default Main