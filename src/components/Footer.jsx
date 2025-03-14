import React from "react";
import "./Footer.css";
// Optionally import social icons from react-icons or your own icons
import x from "../assets/icons/X.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container" data-scroll-section>
      {/* Left Side */}
      <div className="footer-left">
        <h2 className="footer-brand">UNIGEEK</h2>
        <div className="line"></div>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="footer-socials">
          <a href="#facebook">
            <FaFacebookF />
          </a>
          <a href="#instagram">
            <FaInstagram />
          </a>
          <a href="#twitter">
            <img src={x} alt="" className="footer-icon" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="footer-right">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>ABOUT</h3>
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
    </footer>
  );
};

export default Footer;
