import React, { useState, useEffect } from 'react'
import './Skills.scss'
import ReactTooltip from 'react-tooltip'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experience"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then(data => {
      // console.log('::: experience data :::==>', data)
      setExperience(data)
    })

    client.fetch(skillsQuery).then(data => {
      // console.log('::: skills data :::==>', data)
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>
        <span>Skills </span> and <span>Experience</span>
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map(skill => (
            // console.log('::: skills :::==>', skill),
            <motion.div
              key={`skill-${skill.name}`}
              className='app__skills-item app__flex'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgcolor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {/* {console.log('::: experience :::==>', experience)} */}

          {experience?.map(experience => (
            <motion.div
              className='app__skills-exp-item'
              key={`exp-${experience.year}`}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map(work => (
                  <>
                    <motion.div
                      className='app__skills-exp-work app__flex'
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip={work.description}
                      data-for={`name-${work.name}`}
                      key={`name-${work.name}`}
                    >
                      <h4 className='bold-text-exp'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                      {/* <p className='p-text'>{work.description}</p> */}
                    </motion.div>
                    <ReactTooltip
                      id={`name-${work.name}`}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.description}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__graybg'
)
