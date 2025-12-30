import React from "react";
import mentor from "../assets/icons/mentor.png";
import curriculum from "../assets/icons/curriculumIcon.png";
import OneToOne from "../assets/icons/one_O_one.png";
import coursesIcon from "../assets/icons/coursesIcon.png";
import "./WhyDifferent_DL.css";

const WhyDifferent_TM = () => {
  return (
    <section className="stats-bannerWD" data-scroll-section>
      <div className="upper-div">
        <h2 className="wd-heading" data-scroll data-scroll-speed="2">
          “Why We Are <span>Different_TM</span> From Others ?”
        </h2>
        <p className="wd-subheading" data-scroll data-scroll-speed="2">
          We have highly professional mentors around the globe. We have great
          features than any other platform.
        </p>
      </div>
      <div className="lower-div">
        <div className="stats-boxx">
          <div className="stats-icon01">
            <img src={mentor} alt="Book Icon" className="sicon01" />
          </div>
          <div className="stats-info">
            <h2>Best Teachers</h2>
            <p>We have highly skilled teachers with experience</p>
          </div>
        </div>
        <div className="stats-boxx">
          <div className="stats-icon02">
            <img src={curriculum} alt="Book Icon" className="sicon02" />
          </div>
          <div className="stats-info">
            <h2>Best Curriculum</h2>
            <p>We made our structure understandable and future proof</p>
          </div>
        </div>
        <div className="stats-boxx">
          <div className="stats-icon03">
            <img src={OneToOne} alt="Book Icon" className="sicon03" />
          </div>
          <div className="stats-info">
            <h2>1 to 1 Support</h2>
            <p>We give 1 to 1 support to our students</p>
          </div>
        </div>
        <div className="stats-boxx">
          <div className="stats-icon04">
            <img src={coursesIcon} alt="Book Icon" className="sicon04" />
          </div>
          <div className="stats-info">
            <h2>5+ Courses</h2>
            <p>Everything you need to learn, all in one place</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent_TM;
