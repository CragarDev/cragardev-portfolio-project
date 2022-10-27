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
                <p className='p-text'>Hello, My name is</p>
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
          <div className='photos_container'>
            <img src={images.C01} alt='pict01' />
            <img src={images.C03} alt='pict03' />
            <img src={images.C04} alt='pict04' />
            <img src={images.C05} alt='pict05' />
            <img src={images.C06} height={800} alt='pict06' />
            <img src={images.C07} alt='pict07' />
            <img src={images.C08} alt='pict08' />
            <img src={images.C09} alt='pict09' />
            <img src={images.C10} alt='pict10' />
            <img src={images.C11} alt='pict11' />
            <img src={images.C12} alt='pict12' />
          </div>
          <div className="big_pict_container">
            <motion.img
              className='avatar'
              whileHover={{ scale: 1.1, opacity: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut'
              }}
              src={images.CraigAvatarStanding02}
              alt='profile'
            />
            <motion.img
              className='big_pict'
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut'
              }}
              src={images.C064}
              alt='pict06'
            />
          </div>
          <motion.img
            className='overlay_circle'
            whileInView={{ scale: [0, 1] }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
            src={images.circle_04}
            alt='profile_circle'
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.react, images.javascript, images.python, images.java2].map(
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

export default AppWrap(Header, 'home', 'app__headerbg')
