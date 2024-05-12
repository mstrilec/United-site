import React from 'react'
import { ReactSVG } from 'react-svg'
import './Input.css'

const Input = ({ placeholder, link, corner, border }) => {
  return (
    <label className="signIn-input signIn-input-first-corner" style={{'--corner': corner, '--border': border}}>
      <div className='signIn-input-second-corner' style={{'--corner': corner, '--border': border}}></div>
        <ReactSVG src={link} className='signIn-input-img' />
        <input type="text" placeholder={placeholder} className='signIn-input-item' />
      <div/>
    </label>
  )
}

export default Input