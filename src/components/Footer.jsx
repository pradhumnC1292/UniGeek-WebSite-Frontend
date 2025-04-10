import React from "react";
import "./Footer.css";
// import x from "../assets/icons/X.png";
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
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="footer-brand">UNIGEEK</h2>
          <div className="line"></div>
          <p className="footer-description">
            Empowering ambitious students with skills and guidance to launch
            successful careers in top tech companies.
          </p>
          <div className="footer-socials">
            <a href="#facebook">
              <FaFacebookF />
            </a>
            <a href="#instagram">
              <FaInstagram />
            </a>
            <a href="#twitter">
              <FaTwitter />
              {/* <img src={x} alt="" className="footer-icon" /> */}
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms Of Services</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>COURSES</h3>
            <ul>
              <li>
                <a href="#javafullstack">Java Full Stack</a>
              </li>
              <li>
                <a href="#mern">MERN Full Stack</a>
              </li>
              <li>
                <a href="#learnuiux">Learn UI/UX</a>
              </li>
              <li>
                <a href="#learnuiux">Learn DevOps</a>
              </li>
              <li>
                <a href="#learnuiux">Learn Data analysis</a>
              </li>
              <li>
                <a href="#levelupprogram">Level-Up Program</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <a href="#becomeamentor">Become a mentor</a>
              </li>
              <li>
                <a href="#hirefromus">Hire from Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-write-div">
        <p>
          <FaRegCopyright id="copy-icon" /> 2025 UniGeek Software Services Pvt.
          Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
