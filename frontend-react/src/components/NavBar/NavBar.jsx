import React from 'react'
import { useState, useEffect } from 'react'
import { urlFor, client } from '../../client'
import './NavBar.scss'
import { images } from '../../constants/'
import { HiMenuAlt4, HiX, HiOutlineDocumentDownload } from 'react-icons/hi'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [resume, setResume] = useState([])

  useEffect(() => {
    const query = `*[_type == "resume"]{name, "resumeURL": resumeurl.asset->url}`
    client.fetch(query).then(data => {
      // console.log('::: resume data[0].resumeURL :::==>', data)
      setResume(data[0].resumeURL)
    })

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
        <img src={images.CragarDevLogo6} alt='logo' />
      </div>
      {/* <h3>{windowWidth}</h3> */}
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map(
          item => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div className='top'></div>
              <a href={`#${item}`}>{item}</a>
              <div className='bottom'></div>
            </li>
          )
        )}
      </ul>
      <div className='app__navbar-sites'>
        <a
          className='resume_container'
          href={`${resume}?dl=Craig_Burke_Resume_download.pdf`}
        >
          <HiOutlineDocumentDownload />
          <p>resume</p>
        </a>

        <a href='https://github.com/CragarDev' target={'_blank'}>
          <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com/in/cragardev/' target={'_blank'}>
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                'home',
                'about',
                'projects',
                'skills',
                'testimonials',
                'contact'
              ].map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
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
              <li>
                <a href='#home' target={'_blank'}>
                  <HiOutlineDocumentDownload />
                  <p>resume</p>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
