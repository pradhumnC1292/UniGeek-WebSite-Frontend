import React from "react";
import Vector from "../assets/icons/Vector.png";
import girlImg from "../assets/icons/girlImage.png";
import groupImg from "../assets/icons/group-img.png";
import "./MentorBanner.css";

const MentorBanner = () => {
  return (
    <section data-scroll-section>
      <div className="mentor-banner">
        <div className="mentor-left">
          <img src={girlImg} alt="Girl" className="mentor-girl-img" />

          <div className="mentor-stats-badge">
            <h3>10+</h3>
            <p>Top class mentors</p>

            <img
              src={groupImg}
              alt="Group Mentors"
              className="mentor-group-img"
            />
          </div>
        </div>

        <div className="mentor-right">
          <h2>
            "Unlock Your Potential with Expert-Led Online Classes Anytime,
            Anywhere!"
          </h2>
          <p>
            Join interactive courses, learn from top instructors, and achieve
            your goals at your own pace.
          </p>
          <button className="mentor-cta">Get Started</button>
        </div>

        <img src={Vector} alt="Vector decoration" className="vector-img" />
      </div>
    </section>
  );
};

export default MentorBanner;
