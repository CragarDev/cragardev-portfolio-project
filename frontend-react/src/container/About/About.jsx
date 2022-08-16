import React from 'react'
import { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {
  const [about, setAbout] = useState([])

  useEffect(() => {
    const query = '*[_type == "about"]'

    client.fetch(query).then(data => {
      console.log('::: data :::==>', data)
      setAbout(data)
    })
  }, [])

  return (
    <>
      <div id='about' className='app__about'>
        <h2 className='head-text'>
          <span>A little bit</span> About me...
          <br />
          <span>I'm based out of</span> Norman, OK
        </h2>
        <div className='app__profiles'>
          {about.map((abt, index) => (
            <motion.div
              className='app__profiles-item'
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween', delayChildren: 0.5 }}
              key={abt.name + index}
            >
              <img src={urlFor(abt.imgurl)} alt={abt.name} />
              <h2
                id='abt-title'
                className='bold-text'
                style={{ marginTop: 20 }}
              >
                {abt.name}
              </h2>
              <p className='p-text' style={{ marginTop: 10 }}>
                {abt.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__aboutbg')
