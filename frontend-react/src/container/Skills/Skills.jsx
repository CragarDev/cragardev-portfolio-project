import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"] | order(year desc)';

    const skillsQuery = '*[_type == "skills" && featured == true] | order(displayOrder asc)';

    const legacySkillsQuery = '*[_type == "skills" && !(name in ["SwiftUI", "SQL", "Blender"])]';

    client.fetch(query).then(setExperience);

    client.fetch(skillsQuery).then((featuredSkills) => {
      // Keep the existing published lineup until all 16
      // featured skills have been published.
      if (featuredSkills.length === 16) {
        setSkills(featuredSkills);
      } else {
        client.fetch(legacySkillsQuery).then(setSkills);
      }
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Skills </span> and <span>Experience</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            // console.log('::: skills :::==>', skill),
            <motion.div key={`skill-${skill.name}`} className="app__skills-item app__flex" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
              <div className="app__flex" style={{ backgroundColor: skill.bgcolor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {/* {console.log('::: experience :::==>', experience)} */}

          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={`exp-${experience.year}`}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <motion.div className="app__skills-exp-work" key={`${experience.year}-${work.name}-${index}`} whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                    <h4 className="bold-text-exp">{work.name}</h4>

                    <p className="app__skills-exp-company">{work.company}</p>

                    {work.description && <p className="app__skills-exp-description">{work.description}</p>}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__graybg");
