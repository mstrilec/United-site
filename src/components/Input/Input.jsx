import React from 'react'
import { ReactSVG } from 'react-svg'
import './Input.css'

const Input = ({ placeholder, link, corner, border, value, onChange, pad, }) => {
  const padding = pad ? pad : '20px 0 14px 0'

  return (
    <label className="signIn-input signIn-input-first-corner" style={{'--corner': corner, '--border': border, padding: padding}}>
      <div className='signIn-input-second-corner' style={{'--corner': corner, '--border': border}}></div>
        <ReactSVG src={link} className='signIn-input-img' />
        <input 
          type="text" 
          maxLength="33" 
          placeholder={placeholder} 
          className='signIn-input-item' 
          value={value}
          onChange={onChange}
        />
      <div/>
    </label>
  )
}

export default Input