import React from 'react'
import { ReactSVG } from 'react-svg'

const Coin = ({ icon, title, price }) => {
  return (
    <div className="crypto">
      <ReactSVG src={icon} className='crypto-img' />
      <div className='crypto-info'>
        <h2 className='crypto-name'>{title}</h2>
        <p className='crypto-price'>{price}</p>
      </div>
    </div>
  )
}

export default Coin