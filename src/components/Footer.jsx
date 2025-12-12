// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="ft" data-scroll-section>
      <div className="ft__inner">
        <div className="ft__left">
          <div className="ft__brand">
            <h2 className="ft__logo">GEEKSKUL</h2>
            <p className="ft__desc">
              Empowering ambitious students with skills and guidance to launch
              successful careers in top tech companies.
            </p>
            <div className="ft__social" aria-label="Social media">
              <Link to="/" className="ft__social-link" aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link to="/" className="ft__social-link" aria-label="Instagram">
                <FaInstagram />
              </Link>
              <Link to="/" className="ft__social-link" aria-label="Twitter">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT (link columns) */}
        <div className="ft__right">
          <nav className="ft__links" aria-label="Footer">
            <div className="ft__col">
              <h3 className="ft__col-title">About Us</h3>
              <ul className="ft__list">
                <li>
                  <Link to="/" className="ft__link">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/" className="ft__link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="ft__link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="ft__link">
                    Terms Of Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ft__col">
              <h3 className="ft__col-title">Courses</h3>
              <ul className="ft__list">
                <li>
                  <Link to="/java-course" className="ft__link">
                    Java Full Stack
                  </Link>
                </li>
                <li>
                  <Link to="/mern-course" className="ft__link">
                    MERN Full Stack
                  </Link>
                </li>
                <li>
                  <Link to="/uiux-course" className="ft__link">
                    Learn UI/UX
                  </Link>
                </li>
                <li>
                  <Link
                    to="/devops-course"
                    className="ft__link ft__link--disabled"
                  >
                    Learn DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/data-analysis-course"
                    className="ft__link ft__link--disabled"
                  >
                    Learn Data Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/levelup-course"
                    className="ft__link ft__link--disabled"
                  >
                    Level-Up Program
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ft__col">
              <h3 className="ft__col-title">Useful Links</h3>
              <ul className="ft__list">
                <li>
                  <Link to="/become-a-mentor" className="ft__link">
                    Become a mentor
                  </Link>
                </li>
                <li>
                  <Link to="/hire-from-us" className="ft__link">
                    Hire from Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="ft__bottom">
        <p className="ft__copy">
          <FaRegCopyright className="ft__copy-icon" />
          {` 2025 Pultox Technologies Pvt. Ltd., All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
