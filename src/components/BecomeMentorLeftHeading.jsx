// import React from "react";
// import { motion } from "framer-motion";
// import "./BecomeMentorHeroSec.css";

// const letterContainerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const letterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const AnimatedText = ({ text }) => {
//   return (
//     <motion.span
//       variants={letterContainerVariants}
//       initial="hidden"
//       animate="visible"
//       style={{ display: "inline-block" }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span key={index} variants={letterVariants}>
//           {char}
//         </motion.span>
//       ))}
//     </motion.span>
//   );
// };

// const BecomeMentorLeftHeading = () => {
//   return (
//     <motion.div
//       className="hero-left-heading"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.1, ease: "easeOut" }}
//     >
//       <h1>Shape the Future</h1>
//       <h1>
//         <AnimatedText text="Inspire Minds" />
//       </h1>
//       <h1>
//         Become a <AnimatedText text="Mentor" /> Today
//       </h1>
//     </motion.div>
//   );
// };

// const BecomeMentorLeftDiv = ({ handleCtaClick }) => {
//   return (
//     <div className="hero-left">
//       <BecomeMentorLeftHeading />
//       <p className="become-mentor-hero-subtext">
//         Join our mission to guide and support the next generation of developers,
//         engineers, and innovators.
//       </p>
//       <p className="become-mentor-hero-subtext">
//         Whether you're an experienced educator, an IIT/NIT student, or a
//         management enthusiast — there's a place for you here.
//       </p>
//       <p className="become-mentor-hero-subtext">
//         Share your skills, inspire growth, and be part of a thriving learning
//         community making real impact.
//       </p>
//       <button className="hero-cta" onClick={handleCtaClick}>
//         Become a Mentor
//       </button>
//     </div>
//   );
// };

// export default BecomeMentorLeftDiv;

import React, { useState } from "react";
import { motion } from "framer-motion";
import MentorFormModal from "./MentorFormModal";
import "./BecomeMentorHeroSec.css";

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

const BecomeMentorLeftHeading = () => {
  return (
    <motion.div
      className="hero-left-heading"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <h1>Shape the Future</h1>
      <h1>
        <AnimatedText text="Inspire Minds" />
      </h1>
      <h1>
        Become a <AnimatedText text="Mentor" /> Today
      </h1>
    </motion.div>
  );
};

const BecomeMentorLeftDiv = () => {
  // State to control the visibility of the MentorForm modal.
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="hero-left">
      <BecomeMentorLeftHeading />
      <p className="become-mentor-hero-subtext">
        Join our mission to guide and support the next generation of developers,
        engineers, and innovators.
      </p>
      <p className="become-mentor-hero-subtext">
        Whether you're an experienced educator, an IIT/NIT student, or a
        management enthusiast — there's a place for you here.
      </p>
      <p className="become-mentor-hero-subtext">
        Share your skills, inspire growth, and be part of a thriving learning
        community making real impact.
      </p>
      <button className="hero-cta" onClick={handleOpenForm}>
        Become a Mentor
      </button>

      {/* Modal Form for mentor application */}
      {showForm && (
        <MentorFormModal
          role="Mentor"
          onClose={handleCloseForm}
          onSuccess={() => {
            // Optionally you can trigger a toast here
            // e.g. toast.success("Application submitted successfully!");
            handleCloseForm();
          }}
        />
      )}
    </div>
  );
};

export default BecomeMentorLeftDiv;
