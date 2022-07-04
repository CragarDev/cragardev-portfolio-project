import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants/'
import { AppWrap } from '../../wrapper'

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <>
      <div id='home' className='app__header app__flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                {/* <p className='p-text'>Hey, how's it going?</p> */}
                <p className='p-text'>Hi, My name is</p>
                <h1 className='head-text'>Craig</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Full Stack Developer</p>
              <p className='p-text'>MERN, Java, Python</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='app__header-img'
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.85, delayChildren: 0.85 }}
        >
          <img src={images.CraigAvatarStanding01} alt='profile' />
          <motion.img
            className='overlay_circle'
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle_02}
            alt='profile_circle'
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.javascript, images.react, images.python].map(
            (circle, index) => (
              <div className='circle-cmp app__flex' key={`circle-${index}`}>
                <img src={circle} alt='skill' />
              </div>
            )
          )}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Header, 'home')
