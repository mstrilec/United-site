import React from 'react'
import './Pluses.css'

const Pluses = ({
  img,
  title,
  subtitle,
  text,
}) => {
  return (
    <div className='pluses'>
      <img src={img} alt="Pluses" className='pluses-image' />
      <div className='plus-text'>
      <h3 className='pluses-title'>{title}</h3>
      <p className="pluses-text">{text}</p>
      </div>
    </div>
  )
}

export default Pluses