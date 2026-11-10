import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/";
import { SiPython, SiSwift, SiReact, SiJavascript, SiNodedotjs, SiBlender } from "react-icons/si";
import { AppWrap } from "../../wrapper";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <div id="home" className="app__header app__flex">
        <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.85, ease: "easeInOut" }} className="app__header-info">
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>

              <div className="greeting-copy">
                <p className="p-text greeting-intro">Hello, my name is</p>
                <h1 className="head-text greeting-name">Craig</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Software Developer</p>
              <p className="p-text">Python · SwiftUI</p>
              <p className="p-text">Full Stack · Automation</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="app__header-img" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.85, delayChildren: 0.85 }}>
          <div className="photos_container">
            <img src={images.C01} alt="pict01" />
            <img src={images.C03} alt="pict03" />
            <img src={images.C04} alt="pict04" />
            <img src={images.C05} alt="pict05" />
            <img src={images.C06} height={800} alt="pict06" />
            <img src={images.C07} alt="pict07" />
            <img src={images.C08} alt="pict08" />
            <img src={images.C09} alt="pict09" />
            <img src={images.C10} alt="pict10" />
            <img src={images.C11} alt="pict11" />
            <img src={images.C12} alt="pict12" />
          </div>

          <div className="big_pict_container">
            <motion.img className="avatar" src={images.CraigAvatar2026} alt="Craig avatar" />
          </div>

          <motion.img
            className="overlay_circle"
            whileInView={{ scale: [0, 1] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            src={images.circle_04}
            alt="profile_circle"
          />
        </motion.div>

        <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
          {[
            { name: "Swift", Icon: SiSwift, color: "#F05138" },
            { name: "Blender", Icon: SiBlender, color: "#F5792A" },
            { name: "React", Icon: SiReact, color: "#61DAFB" },
            { name: "Python", Icon: SiPython, color: "#3776AB" },
            { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
            { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" }
          ].map(({ name, Icon, color }) => (
            <div className="circle-cmp app__flex" key={name} title={name}>
              <Icon className="technology-icon" color={color} aria-label={name} role="img" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Header, "home", "app__headerbg");
