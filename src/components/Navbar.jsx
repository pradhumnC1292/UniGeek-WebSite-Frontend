import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCoursesToggle = () => {
    setCoursesOpen(!coursesOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (!mobileMenuOpen) {
      setCoursesOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">LOGO</div>
        <button className="hamburger" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-center-div">
          <ul className={`nav-links ${mobileMenuOpen ? "nav-active" : ""}`}>
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" onClick={handleCoursesToggle}>
                Courses
                <FaAngleDown className="drop-icon" />
              </a>
              <ul className={`dropdown-menu ${coursesOpen ? "show" : ""}`}>
                <li>
                  <a href="#java">Java Full Stack Development</a>
                </li>
                <li>
                  <a href="#mern">MERN Full Stack Development</a>
                </li>
                <li>
                  <a href="#uiux">UI/UX</a>
                </li>
                <li>
                  <a href="#levelup">LevelUp Programs</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#mentor">Become a mentor</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <button className="call-btn" onClick={handleThemeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
