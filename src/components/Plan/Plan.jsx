import React from 'react'
import './Plan.css'

const Plan = ({
  img,
  title,
  subtitle,
  text,
}) => {
  return (
    <div className='plan'>
      <img src={img} alt="Plan" className='plan-image' />
      <h3 className='plan-title'>{title}</h3>
    </div>
  )
}

export default Plan