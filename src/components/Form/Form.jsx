import React from 'react'
import Button from '../Button/Button'
import { ReactSVG } from 'react-svg'
import Input from '../Input/Input'

const Form = ({ logo }) => {
  return (
    <form className='contact-container'>
      <ReactSVG src={logo} />
      <Input 
        placeholder='Name'
        corner='#131514'
        border='#7F7F7F'
      />
      <Input 
        placeholder='Email'
        corner='#131514'
        border='#7F7F7F'
      />
      <label className="signIn-input signIn-input-first-corner" style={{'--corner': '#131514', '--border': '#7F7F7F'}}>
        <div className='signIn-input-second-corner' style={{'--corner': '#131514'}}></div>
          <ReactSVG className='signIn-input-img' />
          <textarea name='Message' rows='5' placeholder='Message' className='signIn-input-item signIn-input-item-textarea' />
        <div/>
      </label>
      <Button
        name='Send'
        color='#277F4D'
        type='primary'
        width='100%'
      />
    </form>
  )
}

export default Form