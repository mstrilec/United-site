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
  width,
  span,
  corner,
}) => {
  return (
    <div className='btn' style={{width: width, '--right-corner': corner, '--right-corner-border': color}}>
      <div className='btn-second-corner' style={{'--left-corner': corner, '--left-corner-border': color}}>
        <button className='button' style={{background: color, color: textColor, width: width}}>
        {leftSvg ? (
            <img src={leftSvg} alt='leftSvg' className='leftSvg' />
          ) : null} {name} {span ? (<span className='navbar-item-soon'>{span}</span>) : null} {rightSvg ? (
            <img src={rightSvg} alt='rightSvg' className='rightSvg' />
          ) : null}
        </button>
      </div>
    </div>
  )
}

export default Button