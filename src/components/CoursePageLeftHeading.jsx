import React from "react";
import { motion } from "framer-motion";

const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedText = ({ text }) => {
  return (
    <motion.span
      variants={letterContainerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const CoursePageLeftHeading = () => {
  return (
    <motion.div
      className="course-hero-left-heading"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <h1>
        Build with <AnimatedText text="Java..." />
      </h1>
      <h1>
        Ship with <AnimatedText text="Spring Boot.." />
      </h1>
      <h1>
        Scale with <AnimatedText text="System Design." />
      </h1>
    </motion.div>
  );
};

export default CoursePageLeftHeading;
