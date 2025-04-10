import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./CourseUnigeekWay.css";

const CourseUnigeekWay = () => {
  return (
    <section className="course-unigeek-way-container">
      <div className="course-unigeek-way-content">
        <h2 className="course-unigeek-heading">
          “Why do you choose us”{" "}
          <span role="img" aria-label="">
            ✨
          </span>
        </h2>
        <p className="course-unigeek-subheading">
          Choose Unigeek because we’re dedicated to empowering you with
          practical, industry-driven education that goes beyond theory.
        </p>

        <div className="course-unigeek-features">
          {/* Feature 1 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Code Every Day</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Live sessions by experts
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Fast-paced practice drills
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Daily doubt help
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Personal Skill Tests</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Weekly tests
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                One-on-one coaching
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Soft skill sessions
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Monthly Interview Prep</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Practice mock interviews
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Coding contests
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Real project work
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="course-feature-card">
            <h3 className="course-feature-title">Strong Career Help</h3>
            <ul className="course-feature-list">
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Build your resume
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Interview training
              </li>
              <li>
                <FaCheckCircle className="course-feature-icon" />
                Job referrals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseUnigeekWay;
