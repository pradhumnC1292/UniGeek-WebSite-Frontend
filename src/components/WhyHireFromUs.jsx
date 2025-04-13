import React from "react";
import { FaUserTie, FaBolt, FaHandshake, FaCertificate } from "react-icons/fa";
import "./WhyHireFromUs.css";

const WhyHireFromUs = () => {
  return (
    <section className="whyhire-container">
      <div className="whyhire-content">
        <h2 className="whyhire-heading">
          Why <span>Hire</span> From Us?
          <span role="img" aria-label="stars">
            🌟
          </span>
        </h2>
        <p className="whyhire-subheading">
          We connect you with talented professionals who are not just skilled —
          they're industry-ready, reliable, and driven to make an impact from
          day one.
        </p>

        <div className="whyhire-grid">
          <div className="whyhire-card">
            <FaUserTie className="whyhire-icon" />
            <h3>Pre-Trained Professionals</h3>
            <p>
              Our candidates are rigorously trained in real-world projects and
              technologies, ensuring they're productive from day one.
            </p>
          </div>
          <div className="whyhire-card">
            <FaBolt className="whyhire-icon" />
            <h3>Zero Hiring Cost</h3>
            <p>
              Eliminate expensive recruitment processes — we offer you
              pre-vetted talent at no hiring cost.
            </p>
          </div>
          <div className="whyhire-card">
            <FaHandshake className="whyhire-icon" />
            <h3>Trusted by Startups & Enterprises</h3>
            <p>
              Our learners have contributed to success stories across startups
              and large-scale companies alike.
            </p>
          </div>
          <div className="whyhire-card">
            <FaCertificate className="whyhire-icon" />
            <h3>Consistent, Reliable, Professional</h3>
            <p>
              We ensure our talent pool meets your expectations — from soft
              skills to coding standards, they’re ready to perform.
            </p>
          </div>
        </div>
      </div>
      <div className="whyhire-differentiators">
        <h2 className="differentiator-heading">
          How We Rise <span>Above</span> the Rest
        </h2>
        <div className="differentiator-grid">
          <div className="differentiator-card">
            <h3>Skilled with Industry-level Expertise</h3>
            <p>
              All our learners are trained by experts with 6+ years of
              experience from top tech companies or by IIT/NIT alumni, ensuring
              deep technical knowledge and real-world expertise.
            </p>
          </div>
          <div className="differentiator-card">
            <h3>Diverse Portfolio with Production-Grade Projects</h3>
            <p>
              Hands-on experience across real-world, production-grade projects —
              ensuring our talent is versatile, reliable, and ready to deliver
              from day one.
            </p>
          </div>
          <div className="differentiator-card">
            <h3>Immediate Joiners, Zero Waiting</h3>
            <p>
              Onboard job-ready professionals instantly. Our vetted candidates
              ensure fast integration into your team with no dropouts or delays.
            </p>
          </div>
          <div className="differentiator-card">
            <h3>Chosen by Leading Startups & Enterprises</h3>
            <p>
              Our talented alumni have been hired by a wide range of
              organizations — from fast-growing startups to well-established
              enterprises and global tech companies — trusted for their skills
              and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireFromUs;
