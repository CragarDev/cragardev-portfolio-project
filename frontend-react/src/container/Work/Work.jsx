import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 1000);
  };

  useEffect(() => {
    let cancelled = false;

    const featuredQuery = `
    *[_type == "works" && featured == true]
    | order(displayOrder asc)
  `;

    const originalQuery = `*[_type == "works"]`;

    client
      .fetch(featuredQuery)
      .then((featuredProjects) => {
        // Until featured projects are published,
        // continue showing the original published projects.
        if (featuredProjects.length > 0) {
          return featuredProjects;
        }

        return client.fetch(originalQuery);
      })
      .then((projects) => {
        if (cancelled) return;

        setWorks(projects);
        setFilterWork(projects);
        setActiveFilter("All");
      })
      .catch((error) => {
        console.error("Unable to load portfolio projects:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>A bit</span> of my work...
      </h2>

      <div className="app__work-filter">
        {["Python", "SwiftUI", "iOS", "Automation", "MERN", "React", "Full Stack", "All"].map((item, index) => (
          <div key={index} onClick={() => handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div className="app__work-portfolio" animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgurl)} alt={work.title} />

              {(work.projectLink?.trim() || work.codeLink?.trim()) && (
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    staggerChildren: 0.5
                  }}
                  className="app__work-hover app__flex"
                >
                  {work.projectLink?.trim() && (
                    <a href={work.projectLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${work.title} project`}>
                      <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.8] }} transition={{ duration: 0.25 }} className="app__flex">
                        <AiFillEye />
                      </motion.div>
                    </a>
                  )}

                  {work.codeLink?.trim() && (
                    <a href={work.codeLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${work.title} source code`}>
                      <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.8] }} transition={{ duration: 0.25 }} className="app__flex">
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  )}
                </motion.div>
              )}
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text_orange">{work.title}</h4>

              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text_dark">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

// export default AppWrap(
//   Work, 'projects')

export default AppWrap(MotionWrap(Work, "app__works"), "projects", "app__darkbluebg");
