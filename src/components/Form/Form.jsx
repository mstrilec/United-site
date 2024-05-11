import React from 'react'
import Button from '../Button/Button'
import { ReactSVG } from 'react-svg'
import Input from '../Input/Input'

const Form = ({ logo }) => {
  return (
    <form className='contact-container'>
      <ReactSVG src={logo} />
      <Input 
        placeholder='Email'
        corner='#131514'
      />
      <Input 
        placeholder='Email'
        corner='#131514'
      />
      <Input
        placeholder='Message'
        corner='#131514'
      />
      <Button
        name='Send'
        color='#277F4D'
        textColor='#FFFFFF'
        width='100%'
      />
    </form>
  )
}

export default Form