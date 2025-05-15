import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleCoursesToggle = () => {
    setCoursesOpen((prev) => !prev);
  };

  // When this button is clicked, dispatch a custom event "requestCallback"
  const handleRequestCallback = () => {
    window.dispatchEvent(new Event("requestCallback"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setCoursesOpen(false);
      }
    };

    if (mobileMenuOpen || coursesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, coursesOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container" ref={menuRef}>
        <div className="logo">
          {/* Make the logo clickable */}
          <NavLink to="/">GEEKSKUL</NavLink>
        </div>
        <button
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-center-div">
          <ul className={`nav-links ${mobileMenuOpen ? "nav-active" : ""}`}>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="dropdown-toggle"
                onClick={handleCoursesToggle}
              >
                Courses
                <FaAngleDown className="drop-icon" />
              </NavLink>
              <ul className={`dropdown-menu ${coursesOpen ? "show" : ""}`}>
                <li>
                  <NavLink
                    to="/java-course"
                    onClick={() => setCoursesOpen(false)}
                  >
                    Java Full Stack Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mern-course"
                    onClick={() => setCoursesOpen(false)}
                  >
                    MERN Full Stack Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/uiux-course"
                    onClick={() => setCoursesOpen(false)}
                  >
                    UI/UX
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/devops-course"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoursesOpen(false);
                      alert("This course is currently unavailable.");
                    }}
                    className="disabled-link"
                  >
                    DevOps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/data-analysis-course"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoursesOpen(false);
                      alert("This course is currently unavailable.");
                    }}
                    className="disabled-link"
                  >
                    Data analysis Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/levelup-course"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoursesOpen(false);
                      alert("This course is currently unavailable.");
                    }}
                    className="disabled-link"
                  >
                    LevelUp Programs
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/become-a-mentor">Become a mentor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/hire-from-us">Hire from Us</NavLink>
            </li>
          </ul>
        </div>
        {/* Replaced dark mode button with Request Callback button */}
        <button className="call-btn" onClick={handleRequestCallback}>
          Request Callback
        </button>
      </div>
    </header>
  );
};

export default Navbar;
