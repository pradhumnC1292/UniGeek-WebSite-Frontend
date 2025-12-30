import React from "react";
import { motion } from "framer-motion";
import "./SquishyPriceCard.css";

export default function SquishyPriceCard({
  planTag = "Recommended",
  price = "₹499",
  period = "/month",
  title = "Full Stack Program",
  description = "Job-ready skills, mentorship, and placement support.",
  buttonText = "Enroll Now",
  onClick,
}) {
  return (
    <div className="sq-wrap">
      <motion.div
        whileHover="hover"
        transition={{ duration: 0.9, ease: "backInOut" }}
        variants={{ hover: { scale: 1.04 } }}
        className="sq-card"
      >
        <div className="sq-content">
          <span className="sq-pill">{planTag}</span>

          <motion.div
            initial={{ scale: 0.92 }}
            variants={{ hover: { scale: 1 } }}
            transition={{ duration: 0.9, ease: "backInOut" }}
            className="sq-price"
          >
            <span className="sq-price-main">{price}</span>
            <span className="sq-price-sub">{period}</span>
          </motion.div>

          <h3 className="sq-title">{title}</h3>
          <p className="sq-desc">{description}</p>
        </div>

        <button className="sq-btn" onClick={onClick}>
          {buttonText}
        </button>

        <SquishyBackground />
      </motion.div>
    </div>
  );
}

function SquishyBackground() {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sq-bg"
      variants={{ hover: { scale: 1.45 } }}
      transition={{ duration: 0.9, ease: "backInOut" }}
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.55, y: -22 } }}
        transition={{ duration: 0.9, ease: "backInOut", delay: 0.15 }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="rgba(17, 24, 39, 0.35)"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.1, y: -22 } }}
        transition={{ duration: 0.9, ease: "backInOut", delay: 0.15 }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="rgba(17, 24, 39, 0.35)"
      />
    </motion.svg>
  );
}
