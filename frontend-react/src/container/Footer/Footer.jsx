import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { name, email, message } = formData

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChangeInput = e => {
    console.log('handleChangeInput', e.target.value)
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }
  return (
    <>
      <h2 className='head-text'>
        <span>Grab a coffee... </span> let's chat!
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.celphone} alt='mobile' />
          <a href='tel:+1 (214) 957-0713' className='p-text_dark'>
            cel: +1 (214) 957-0713
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.email01} alt='email' />
          <a href='mailto:cragardev@gmail.comn' className='p-text_dark'>
            email: cragardev@gmail.com
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              name='message'
              value={message}
              onChange={handleChangeInput}
              placeholder='Your Message'
            ></textarea>
          </div>
          <button className='p-text_dark' type='button' onClick={handleSubmit}>
            {loading ? 'SENDING' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div className='head-text'>Thank You for getting in touch!</div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__footerbg'
)
