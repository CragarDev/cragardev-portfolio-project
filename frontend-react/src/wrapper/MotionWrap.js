import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div whileInView={{ y: [0, 0, 1], opacity: [0, 0, 1] }} duration={{ duration: 0.5 }} classNames={`${classNames} app__flex`}>
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
