import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

const SafeCard = ({ title, text, icon}) => {
  return (
    <Link to='/signup' className='cards-link'>
      <div className="safe-card">
        <img src={icon} className='safe-card-img' />
        <div className='safe-card-info'>
          <h3 className="safe-card-title">{title}</h3>
          <p className="safe-card-subtitle">{text}</p>
        </div>
      </div>
    </Link>
  )
}

export default SafeCard