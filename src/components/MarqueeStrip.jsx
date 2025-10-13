import React, { useMemo } from "react";
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

export default function MarqueeStrip() {
  // Messages inside component
  const messages = useMemo(
    () => [
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
      { icon: <FaCertificate />, text: "Recognize Certificate of Completion" },
      { icon: <FaHeadset />, text: "24/7 Student Support" },
      {
        icon: <FaUserCheck />,
        text: "Mock Interviews & Resume / Profile Building",
      },
      { icon: <FaUsers />, text: "Alumni Network Access" },
    ],
    []
  );

  // Duplicate list for infinite loop
  const items = messages.concat(messages);

  return (
    <div className="marquee-strip" role="region" aria-label="Latest updates">
      <div className="marquee-fade left" aria-hidden="true" />
      <div className="marquee-fade right" aria-hidden="true" />

      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
