import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar02.css";

const Navbar02 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Sparkly</Link>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li className="dropdown" onClick={toggleCoursesDropdown}>
          Courses
          <ul
            className={`dropdown-menu ${isCoursesDropdownOpen ? "active" : ""}`}
          >
            <li>
              <Link
                to="/java-full-stack"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Java Full Stack Program
              </Link>
            </li>
            <li>
              <Link to="/mern-stack" onClick={() => setIsMobileMenuOpen(false)}>
                MERN Stack Program
              </Link>
            </li>
            <li>
              <Link to="/ui-ux" onClick={() => setIsMobileMenuOpen(false)}>
                UI/UX
              </Link>
            </li>
            <li>
              <Link
                to="/data-science"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Data Science
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/become-mentor" onClick={() => setIsMobileMenuOpen(false)}>
            Become a Mentor
          </Link>
        </li>
        <li>
          <Link to="/hire-from-us" onClick={() => setIsMobileMenuOpen(false)}>
            Hire from Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar02;
