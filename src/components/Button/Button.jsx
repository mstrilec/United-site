import React from 'react'
import './Button.css'
import { ReactSVG } from 'react-svg'
import vectorRight from '../../assets/VectorRight.svg'
import vectorLeft from '../../assets/VectorLeft.svg'

const Button = ({
  name,
  color,
  textColor,
  rightSvg,
  leftSvg,
}) => {
  return (
    <div className='button'>
      <ReactSVG src={vectorLeft} className='vector-left' style={{color: color}} />
      <button className='btn' style={{background: color, color: textColor}}>
      {leftSvg ? (
          <img src={leftSvg} alt='leftSvg' />
        ) : null} {name} {rightSvg ? (
          <img src={rightSvg} alt='rightSvg' />
        ) : null}
      </button>
      <ReactSVG src={vectorRight} className='vector-right' style={{color: color}} />
    </div>

    
  )
}

export default Button