import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./CourseUnigeekWay.css";

const CourseUnigeekWay = () => {
  return (
    <section className="course-unigeek-way-container">
      <div className="course-unigeek-way-content">
        <h2 className="course-unigeek-heading">
          “Why Choose Us”{" "}
          <span role="img" aria-label="">
            ✨
          </span>
        </h2>
        <p className="course-unigeek-subheading">
          At Geekskul, we focus on real skills, real projects, and real growth—
          so you can step into the industry with confidence.
        </p>

        <div className="course-unigeek-features">
          {/* Feature 1 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Daily Coding Practice</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Live expert-led classes
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Hands-on coding drills
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Instant doubt-solving
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Personal Growth Tracking</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Weekly progress tests
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                One-on-one mentoring
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Communication & soft skills
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Interview-Ready Training</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Mock interview sessions
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Coding hackathons
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Real-world project exposure
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Career Support That Lasts</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Resume & portfolio building
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Practical interview coaching
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Trusted job referrals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseUnigeekWay;
