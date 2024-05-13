import React from 'react'
import './Button.css'
import { ReactSVG } from 'react-svg'
import vectorRight from '../../assets/VectorRight.svg'
import vectorLeft from '../../assets/VectorLeft.svg'

const Button = ({
  name,
  color,
  rightSvg,
  leftSvg,
  width,
  height,
  span,
  corner,
  style,
  fix,
  type,
  className,
  disabled,
  onClick,
  notify,
}) => {
  const buttonStyle = type === 'primary' ? {
    background: '#277F4D',
    color: '#FFFFFF',
    '--btn-hover': '#144026',
    '--text-hover': '#FFFFFF',
  } : {
    background: '#D6ECDF',
    color: '#144026',
    '--btn-hover': '#5AB280',
    '--text-hover': '#FFFFFF',
  };

  const BtnHeight = height ? height : '48px'

  const cornerStyle = type === 'primary' ? '#277F4D' : '#D6ECDF'

  return (
    <div className={'btn ' + fix + ` ${className}`} style={{ width: width, '--right-corner': corner, '--right-corner-border': cornerStyle }}>
      <div className='btn-second-corner' style={{ '--left-corner': corner, '--left-corner-border': cornerStyle }}>
        <button disabled={disabled ? true : false} className={'button ' + style + ` ${className}`} style={{ width: width, height: BtnHeight, ...buttonStyle }} onClick={(e) => {onClick && onClick(e)}}>
          {leftSvg ? (
            <img src={leftSvg} alt='leftSvg' className='leftSvg' />
          ) : null} {name} {span ? (<span className='navbar-item-soon'>{span}</span>) : null} {rightSvg ? (
            <img src={rightSvg} alt='rightSvg' className='rightSvg' />
          ) : null}
        </button>
      </div>
    </div>
  );
}

export default Button