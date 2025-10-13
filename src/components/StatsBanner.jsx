import React from "react";
import "./StatsBanner.css";
import BookIcon from "../assets/icons/book.png";
import mentorIcon from "../assets/icons/mentor.png";
import { FaUsers } from "react-icons/fa";

const StatsBanner = () => {
  return (
    <section className="stats-banner" data-scroll-section>
      <div className="stats-box">
        <div className="stats-icon">
          <img src={BookIcon} alt="Book Icon" className="stats-book-icon" />
        </div>
        <div className="stats-info">
          <h2>05+</h2>
          <p>Total Courses</p>
        </div>
      </div>
      <div className="stats-box">
        <div className="stats-icon">
          <FaUsers size={40} color="#5b47b0" />
        </div>
        <div className="stats-info">
          <h2>100%</h2>
          <p> Placement Support</p>
        </div>
      </div>
      <div className="stats-box">
        <div className="stats-icon">
          <img src={mentorIcon} alt="Book Icon" className="stats-book-icon" />
        </div>
        <div className="stats-info">
          <h2>05+</h2>
          <p>Years Experienced Mentors</p>
        </div>
      </div>
      <div className="stats-box">
        <div className="stats-icon">
          <FaUsers size={40} color="#5b47b0" />
        </div>
        <div className="stats-info">
          <h2>50</h2>
          <p>Students in a single batch only</p>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
