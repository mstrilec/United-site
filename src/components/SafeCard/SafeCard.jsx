import React from 'react'
import { ReactSVG } from 'react-svg'

const SafeCard = ({ title, text, icon}) => {
  return (
    <div className="safe-card">
      <ReactSVG src={icon} className='safe-card-img' />
      <div className='safe-card-info'>
        <h3 className="safe-card-title">{title}</h3>
        <p className="safe-card-subtitle">{text}</p>
      </div>
    </div>
  )
}

export default SafeCard