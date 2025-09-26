import React from "react";
import mentor from "../assets/icons/mentor.png";
import curriculum from "../assets/icons/curriculumIcon.png";
import OneToOne from "../assets/icons/one_O_one.png";
import coursesIcon from "../assets/icons/coursesIcon.png";
import dottedWave from "../assets/icons/dot-line.png";

/* Import your dotted wave line */

import "./WhyDifferent_DL.css";

const WhyDifferent_DL = () => {
  return (
    <section className="why-different" data-scroll-section>
      <div className="left-dotted-banner"></div>
      <div className="right-dotted-banner"></div>

      <h2 className="wd-heading" data-scroll data-scroll-speed="2">
        “Why We Are <span>Different</span> from Others ?”
      </h2>
      <p className="wd-subheading" data-scroll data-scroll-speed="2">
        We have highly professional mentors around the globe. We have great
        features than any other platform.
      </p>

      {/* .feature-div holds the circles and the wave line */}
      <div className="feature-div">
        {/* Dotted wave line image (positioned behind the circles) */}
        <img src={dottedWave} alt="Dotted wave" className="dotted-wave-img" />

        {/* 1st feature */}
        <div className="wd-feature1">
          <div className="wd-circle wd-circle1">
            <img src={mentor} alt="Best Teachers" className="wd-img" />
          </div>
          <h4>Best Teachers</h4>
          <div className="reverse-pyramid" id="pera">
            <p className="line1">We have highly skilled teachers</p>
            <p className="line2">with experience</p>
          </div>
        </div>

        {/* 2nd feature */}
        <div className="wd-feature2">
          <div className="wd-circle wd-circle2">
            <img src={curriculum} alt="Best Curriculum" className="wd-img" />
          </div>
          <h4>Best Curriculum</h4>
          <div className="reverse-pyramid" id="pera">
            <p className="line1">We made our structure understandable</p>
            <p className="line2">and future proof</p>
          </div>
        </div>

        {/* 3rd feature */}
        <div className="wd-feature3">
          <div className="wd-circle wd-circle3">
            <img src={OneToOne} alt="1 to 1 Support" className="wd-img" />
          </div>
          <h4>1 to 1 Support</h4>
          <div className="reverse-pyramid" id="pera">
            <p className="line1">We give 1 to 1 support</p>
            <p className="line2">to our students</p>
          </div>
        </div>

        {/* 4th feature */}
        <div className="wd-feature4">
          <div className="wd-circle wd-circle4">
            <img src={coursesIcon} alt="5+ Courses" className="wd-img" />
          </div>
          <h4>5+ Courses</h4>
          <div className="reverse-pyramid" id="pera">
            <p className="line1">Everything you need to learn,</p>
            <p className="line2">all in one place</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent_DL;
