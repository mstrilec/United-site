import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import './Card.css'

const Card = ({ title, text, arrow, icon }) => {
  return (
    <Link to='/signup' className='cards-link'>
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
    </Link>
  )
}

export default Card