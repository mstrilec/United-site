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
import Button from '../Button/Button'

const Trading = () => {
  return (
    <>
      <div className='crypto-block'>
        <h2 className='crypto-title'>Trade the Most Popular<br/>Cryptocurrencies</h2>
        <div className='crypto-coins'>
          <div className='crypto-coins-first-row'>
            <div className="crypto">
              <ReactSVG src={btc} className='crypto-img' />
              <h2 className='crypto-name'>BTC USDT Perpetual</h2>
              <p className='crypto-price'>63,387.5</p>
            </div>
            <div className="crypto">
              <ReactSVG src={eth} className='crypto-img' />
              <h2 className='crypto-name'>ETH USDT Perpetual</h2>
              <p className='crypto-price'>3,118.69</p>
            </div>
            <div className="crypto">
              <ReactSVG src={pepe} className='crypto-img' />
              <h2 className='crypto-name'>PEPE USDT Perpetual</h2>
              <p className='crypto-price'>0.000008658</p>
            </div>
          </div>
          <div className='crypto-coins-second-row'>
            <div className="crypto">
              <ReactSVG src={sol} className='crypto-img' />
              <h2 className='crypto-name'>ETH USDT Perpetual</h2>
              <p className='crypto-price'>3,118.69</p>
            </div>
            <div className="crypto">
              <ReactSVG src={doge} className='crypto-img' />
              <h2 className='crypto-name'>ETH USDT Perpetual</h2>
              <p className='crypto-price'>3,118.69</p>
            </div>
          </div>
        </div>
        <div className='crypto-btn'>
          <Button
            name='Start trading'
            color='#277F4D'
            textColor='#FFF'
          />
        </div>
      </div>

      <div className="explore-block">
        <h2 className='explore-title'>Explore United Products & Services</h2>
        <div className='explore-products'>
          <div className='explore-products-first-col'>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>Spot Trading</h3>
                <p className='explore-card-subtitle'>Trade crypto with our comprehensive<br/>set of powerful tools to maximize your<br/>profits</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={flag} />
              </div>
            </div>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>Crypto Derivatives</h3>
                <p className='explore-card-subtitle'>We are the best crypto exchange for<br/>trading crypto futures</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={up} />
              </div>
            </div>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>Copy Trading Bot</h3>
                <p className='explore-card-subtitle'>Earn passive income round-the-clock<br/>without having to constantly monitor<br/>markets</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={bot} />
              </div>
            </div>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>Leveraged Tokens</h3>
                <p className='explore-card-subtitle'>Amplify your investment returns by simply<br/>buying and selling leveraged tokens</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={tokens} />
              </div>
            </div>
          </div>
          <div className='explore-products-second-col'>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>Buy Crypto</h3>
                <p className='explore-card-subtitle'>Purchase crypto quickly and easily on<br/>our popular and industry-leading<br/>platform</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={card} />
              </div>
            </div>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>United Earn</h3>
                <p className='explore-card-subtitle'>Invest and earn steady income with the<br/>help of a professional asset manager<br/></p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={earn} />
              </div>
            </div>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>Margin Trading</h3>
                <p className='explore-card-subtitle'>Borrow, trade, and repay. Leverage your assets<br/>with margin trading</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={trading} />
              </div>
            </div>
            <div className='explore-card'>
              <div className='explore-card-text'>
                <h3 className='explore-card-title'>United Wallet</h3>
                <p className='explore-card-subtitle'>A self-custody social wallet that allows<br/>you to easily discover, invest, and earn</p>
              </div>
              <div className='explore-card-imgs'>
                <ReactSVG src={arrowRight} />
                <ReactSVG src={wallet} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='safe-block'>
        <h2 className="safe-title">Your Safe<br/>and Trusted Crypto Exchange</h2>
        <div className='safe-cards'>
          <div className="safe-card">
            <ReactSVG src={storage} />
            <h3 className="safe-card-title">Secure Asset<br/>Storage</h3>
            <p className="safe-card-subtitle">Our industry-leading encryption<br/>and storage systems ensure that<br/>your assets are always safe and<br/>secure.</p>
          </div>
          <div className="safe-card">
            <ReactSVG src={account} />
            <h3 className="safe-card-title">Strong Account<br/>Security</h3>
            <p className="safe-card-subtitle">We adhere to the highest security<br/>standards and implement the<br/>strictest security practices to<br/>keep your account secure.</p>
          </div>
          <div className="safe-card">
            <ReactSVG src={platform} />
            <h3 className="safe-card-title">Trusted <br/>Platform</h3>
            <p className="safe-card-subtitle">We have a secure-by-design<br/>foundation in place to ensure<br/>rapid detection and response to<br/>any cyber attacks.</p>
          </div>
          <div className="safe-card">
            <ReactSVG src={tick} />
            <h3 className="safe-card-title">PoR<br/>Asset Transparency</h3>
            <p className="safe-card-subtitle">PoR (Proof of Reserves) is a<br/>widely used method to prove<br/>custody of assets on the<br/>blockchain, confirming that<br/>United has the funds that cover<br/>all user assets on our books.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trading