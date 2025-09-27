import React from "react";
import {
  FaCalendarAlt,
  FaBriefcase,
  FaUserTie,
  FaProjectDiagram,
  FaCertificate,
  FaHeadset,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import "./MarqueeStrip.css";

const MarqueeStrip = () => {
  const messages = [
    {
      icon: <FaCalendarAlt />,
      text: "New Batch Starting Soon! Limited Seats Available",
    },
    { icon: <FaBriefcase />, text: "100% Job Placement Assistance" },
    { icon: <FaUserTie />, text: "Industry Expert Mentors" },
    {
      icon: <FaProjectDiagram />,
      text: "Live Projects & Real-world Experience",
    },
    { icon: <FaCertificate />, text: "Certificate of Completion" },
    { icon: <FaHeadset />, text: "24/7 Student Support" },
    { icon: <FaUserCheck />, text: "Mock Interviews & Resume Building" },
    { icon: <FaUsers />, text: "Alumni Network Access" },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {messages.map((message, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-icon">{message.icon}</span>
            {message.text}
          </span>
        ))}
        {messages.map((message, index) => (
          <span key={`duplicate-${index}`} className="marquee-item">
            <span className="marquee-icon">{message.icon}</span>
            {message.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
