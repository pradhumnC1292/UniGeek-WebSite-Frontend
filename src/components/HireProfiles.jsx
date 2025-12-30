import React from "react";
import "./HireProfiles.css";

const profiles = [
  "Java Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Java Developer",
  "Software Engineer",
  "Web Developer",
  "UI/UX Designer",
  "MERN Stack Developer",
  "Node JS Developer",
  "Data Analyst",
  "Data Scientist",
  "Business Analyst",
  "DevOps Engineer",
  "Cyber Security Engineer",
  "Security Analyst",
  "Technical Support Engineer",
];

const HireProfiles = () => {
  return (
    <section className="hp-section" aria-labelledby="hp-heading">
      <div className="hp-wrap">
        <h2 id="hp-heading" className="hp-heading">
          Explore <span>In-Demand</span> Tech Profiles
        </h2>

        <div className="hp-tags" role="list">
          {profiles.map((profile, i) => (
            <span className="hp-tag" role="listitem" key={i} tabIndex={0}>
              {profile}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireProfiles;
