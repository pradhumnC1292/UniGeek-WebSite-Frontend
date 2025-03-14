import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

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

const HeroLeftHeading = () => {
  return (
    <motion.div
      className="hero-left-heading"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <h1>We are the</h1>
      <h1>
        <AnimatedText text="Developers" /> Who
      </h1>
      <h1>
        make <AnimatedText text="Developers" />
      </h1>
    </motion.div>
  );
};

export default HeroLeftHeading;
