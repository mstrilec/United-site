import React, { useState } from 'react'
import Button from '../Button/Button'
import { ReactSVG } from 'react-svg'
import Input from '../Input/Input'
import { toast } from 'react-toastify'

const Form = ({ logo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const notify = () => toast.success("Message sent");
  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <form className='contact-container' onSubmit={handleSubmit}>
      <ReactSVG src={logo} />
      <Input 
        placeholder='Name'
        corner='#131514'
        border='#7F7F7F'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input 
        placeholder='Email'
        corner='#131514'
        border='#7F7F7F'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="signIn-input signIn-input-first-corner" style={{'--corner': '#131514', '--border': '#7F7F7F'}}>
        <div className='signIn-input-second-corner' style={{'--corner': '#131514'}}></div>
          <ReactSVG className='signIn-input-img' />
          <textarea 
            name='Message' 
            rows='5' 
            placeholder='Message' 
            className='signIn-input-item signIn-input-item-textarea'
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
          />
        <div/>
      </label>
      <div className='contact-btn-block'>
        <Button
          name='Send'
          color='#277F4D'
          type='primary'
          width='100%'
          onClick={notify}
          disabled={!isFormValid}
        />
      </div>
    </form>
  )
}

export default Form