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
      <h3 className='pluses-title'>{title}</h3>
      <p className="pluses-text">{text}</p>
    </div>
  )
}

export default Pluses