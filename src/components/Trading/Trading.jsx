import React from 'react'
import './Trading.css'
import { ReactSVG } from 'react-svg'
import btc from '../../assets/cryptos/btc.svg'
import eth from '../../assets/cryptos/eth.svg'
import pepe from '../../assets/cryptos/pepe.svg'
import doge from '../../assets/cryptos/doge.svg'
import sol from '../../assets/cryptos/sol.svg'
import flag from '../../assets/explore/flag.svg'
import bot from '../../assets/explore/bot.svg'
import card from '../../assets/explore/card.svg'
import earn from '../../assets/explore/earn.svg'
import tokens from '../../assets/explore/tokens.svg'
import up from '../../assets/explore/up.svg'
import wallet from '../../assets/explore/wallet.svg'
import trading from '../../assets/explore/trading.svg'
import tick from '../../assets/safe/tick.svg'
import storage from '../../assets/safe/storage.svg'
import account from '../../assets/safe/account.svg'
import platform from '../../assets/safe/platform.svg'
import arrowRight from '../../assets/explore/arrow-right.svg'
import logoContact from '../../assets/logo-contact.svg'
import Button from '../Button/Button'
import FAQ from '../FAQ/FAQ'
import Card from '../Card/Card'
import SafeCard from '../SafeCard/SafeCard'
import Form from '../Form/Form'
import Coin from '../Coin/Coin'
import { Link } from 'react-router-dom'

const Trading = () => {
  return (
    <>
      <div className='crypto-block'>
        <h2 className='crypto-title'>Trade the Most Popular<br/>Cryptocurrencies</h2>
        <div className='crypto-coins'>
          <div className='crypto-coins-first-row'>
            <Coin 
              icon={btc}
              title='BTC USDT Perpetual'
            />
            <Coin 
              icon={eth}
              title='ETH USDT Perpetual'
            />
            <Coin 
              icon={pepe}
              title='PEPE USDT Perpetual'
            />
          </div>
          <div className='crypto-coins-second-row'>
            <Coin 
              icon={sol}
              title='SOL USDT Perpetual'
            />
            <Coin 
              icon={doge}
              title='DOGE USDT Perpetual'
            />
          </div>
        </div>
        <div className='crypto-btn'>
          <Link to='/signup'>
            <Button
              name='Start trading'
              color='#277F4D'
              type='primary'
              corner='#161716'
              width='189px'
            />
          </Link>
        </div>
      </div>

      <div className="explore-block">
        <h2 className='explore-title'>Explore United Products & Services</h2>
        <div className='explore-products'>
          <div className='explore-products-first-col'>
            <Card
              title='Spot Trading'
              text={
                <>
                  Trade crypto with our comprehensive<br/>set of powerful tools to maximize your<br/>profits
                </>
              }
              arrow={arrowRight}
              icon={flag}
            />
            <Card
              title='Crypto Derivatives'
              text={
                <>
                  We are the best crypto exchange for<br/>trading crypto futures
                </>
              }
              arrow={arrowRight}
              icon={up}
            />
            <Card
              title='Copy Trading Bot'
              text={
                <>
                  Earn passive income round-the-clock<br/>without having to constantly monitor<br/>markets
                </>
              }
              arrow={arrowRight}
              icon={bot}
            />
            <Card
              title='Leveraged Tokens'
              text={
                <>
                  Amplify your investment returns by simply<br/>buying and selling leveraged tokens
                </>
              }
              arrow={arrowRight}
              icon={tokens}
            />
          </div>
          <div className='explore-products-second-col'>
            <Card
              title='Buy Crypto'
              text={
                <>
                  Purchase crypto quickly and easily on<br/>our popular and industry-leading<br/>platform
                </>
              }
              arrow={arrowRight}
              icon={card}
            />
            <Card
              title='United Earn'
              text={
                <>
                  Invest and earn steady income with the<br/>help of a professional asset manager
                </>
              }
              arrow={arrowRight}
              icon={earn}
            />
            <Card
              title='Margin Trading'
              text={
                <>
                  Borrow, trade, and repay. Leverage your assets<br/>with margin trading
                </>
              }
              arrow={arrowRight}
              icon={trading}
            />
            <Card
              title='United Wallet'
              text={
                <>
                  A self-custody social wallet that allows<br/>you to easily discover, invest, and earn
                </>
              }
              arrow={arrowRight}
              icon={wallet}
            />
          </div>
        </div>
      </div>
      <div className='safe-block'>
        <h2 className="safe-title">Your Safe<br/>and Trusted Crypto Exchange</h2>
        <div className='safe-cards'>
          <div className='safe-card-box'>
            <SafeCard 
              title={
                <>
                  Secure Asset<br/>Storage
                </>
              }
              text={
                <>
                  Our industry-leading encryption<br/>and storage systems ensure that<br/>your assets are always safe and<br/>secure.
                </>
              }
              icon={storage}
            />
            <SafeCard 
              title={
                <>
                  Strong Account<br/>Security
                </>
              }
              text={
                <>
                  We adhere to the highest security<br/>standards and implement the<br/>strictest security practices to<br/>keep your account secure.
                </>
              }
              icon={account}
            />
          </div>
          <div className='safe-card-box'>
            <SafeCard 
              title={
                <>
                  Trusted <br/>Platform
                </>
              }
              text={
                <>
                  We have a secure-by-design<br/>foundation in place to ensure<br/>rapid detection and response to<br/>any cyber attacks.
                </>
              }
              icon={platform}
            />
            <SafeCard 
              title={
                <>
                  PoR<br/>Asset Transparency
                </>
              }
              text={
                <>
                  PoR (Proof of Reserves) is a<br/>widely used method to prove<br/>custody of assets on the<br/>blockchain, confirming that<br/>United has the funds that cover<br/>all user assets on our books.
                </>
              }
              icon={tick}
            />
          </div>
        </div>
      </div>

      <div className='faq-block'>
        <h2 className='faq-title'>FAQ</h2>
        <FAQ />
      </div>

      <div className="start-block">
        <h2 className='start-title'>Start your crypto journey now!</h2>
        <Link to='/signup'>
          <Button 
            name='Sign up now'
            color='#D6ECDF'
            type='secondary'
            corner='#319f60'
            width='149px'
          />
        </Link>
      </div>

      <div className='contact-block'>
        <h2 className='contact-title'>Contact us</h2>
        <Form
          logo={logoContact}
        />
      </div>
    </>
  )
}

export default Trading