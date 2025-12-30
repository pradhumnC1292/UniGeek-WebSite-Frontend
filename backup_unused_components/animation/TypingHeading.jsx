import React from "react";
import { motion } from "framer-motion";
import "./TypingHeading.css";

const headingText = "“Meet Your Expert Mentors”";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const TypingHeading = () => {
  return (
    <motion.h2
      className="typing-heading"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {headingText.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default TypingHeading;
