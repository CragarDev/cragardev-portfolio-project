import React from 'react'
import { useState, useEffect } from 'react'
import './NavBar.scss'
import { images } from '../../constants/'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

//todo: Change the Logo to my own logo ---------------------------------------
//todo: Change the Background Image in the popout menu ---------------------------------------

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setWindowWidth(window.innerWidth)
      },
      false
    )
  }, [])

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.CragarDevLogo3} alt='logo' />
      </div>
      <h3>{windowWidth}</h3>
      <ul className='app__navbar-links'>
        {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map(
          item => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div className='top'></div>
              <a href={`#${item}`}>{item}</a>
              <div className='bottom'></div>
            </li>
          )
        )}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            // initial={{ x: [-300, 0] }}
            // animate={{ x: [300, 0] }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                'home',
                'about',
                'skills',
                'projects',
                'testimonials',
                'contact'
              ].map(item => (
                <li key={item}>
                  {/* <div className='top-menu'></div> */}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                  {/* <div className='bottom-menu'></div> */}
                </li>
              ))}
              <li>
                <a href='https://github.com/CragarDev' target={'_blank'}>
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/cragardev/'
                  target='_blank'
                >
                  <AiOutlineLinkedin />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      <div className='app__navbar-sites'>
        <a href='https://github.com/CragarDev' target={'_blank'}>
          <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com/in/cragardev/' target={'_blank'}>
          <AiOutlineLinkedin />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
