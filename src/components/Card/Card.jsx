import React from 'react'
import { ReactSVG } from 'react-svg'

const Card = ({ title, text, arrow, icon }) => {
  return (
    <div className='explore-card'>
      <div className='explore-card-text'>
        <h3 className='explore-card-title'>{title}</h3>
        <p className='explore-card-subtitle'>{text}</p>
      </div>
      <div className='explore-card-imgs'>
        <ReactSVG src={arrow} />
        <ReactSVG src={icon} className='explore-card-icon' />
        {/* <img src={icon} className='explore-card-icon' /> */}
      </div>
    </div>
  )
}

export default Card