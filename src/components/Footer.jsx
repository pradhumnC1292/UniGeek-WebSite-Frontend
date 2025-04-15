import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container" data-scroll-section>
      <div className="footer-sect">
        <div className="footer-left">
          <h2 className="footer-brand">GEEKSKUL</h2>
          <div className="line"></div>
          <p className="footer-description">
            Empowering ambitious students with skills and guidance to launch
            successful careers in top tech companies.
          </p>
          <div className="footer-socials">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/contact-us">Contact Us</Link>
              </li> */}
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms Of Services</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>COURSES</h3>
            <ul>
              <li>
                <Link to="/java-course">Java Full Stack</Link>
              </li>
              <li>
                <Link to="/mern-course">MERN Full Stack</Link>
              </li>
              <li>
                <Link to="/uiux-course">Learn UI/UX</Link>
              </li>
              <li>
                <Link to="/devops-course" className="disabled-link">
                  Learn DevOps
                </Link>
              </li>
              <li>
                <Link to="/data-analysis-course" className="disabled-link">
                  Learn Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/levelup-course" className="disabled-link">
                  Level-Up Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <Link to="/become-a-mentor">Become a mentor</Link>
              </li>
              <li>
                <Link to="/hire-from-us">Hire from Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-write-div">
        <p>
          <FaRegCopyright id="copy-icon" /> 2025 Pluto Technologies Pvt. Ltd.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
