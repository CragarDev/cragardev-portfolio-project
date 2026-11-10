import React from "react";
import { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    const cardOrder = {
      "Software Developer": 0,
      "Full Stack Developer": 0,
      "Animator / Editor": 1,
      "Animator/Editor": 1,
      Musician: 2,
      Family: 3
    };

    client
      .fetch(query)
      .then((data) => {
        const ordered = [...data].sort((a, b) => (cardOrder[a.name] ?? 99) - (cardOrder[b.name] ?? 99));

        setAbout(ordered);
      })
      .catch((error) => {
        console.error("Unable to load About section:", error);
      });
  }, []);

  return (
    <>
      <div id="about" className="app__about">
        <h2 className="head-text">
          <span>A little bit</span> About me...
          <br />
          <span>I'm based out of</span> Norman, OK
        </h2>
        <div className="app__profiles">
          {about.map((abt, index) => (
            <motion.div className="app__profiles-item" whileInView={{ opacity: 1 }} whileHover={{ y: -6 }} transition={{ duration: 0.5, type: "tween", delayChildren: 0.5 }} key={abt.name + index}>
              <img src={urlFor(abt.imgurl)} alt={abt.name} />
              <h2 id="abt-title" className="bold-text" style={{ marginTop: 20 }}>
                {abt.name}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {abt.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__aboutbg");
