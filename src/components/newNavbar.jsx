import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import brandLogo from "../assets/icons/Logo_Design_WBG.png";
import CallbackModal from "./CallbackModal";
import "./newNavbar.css";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const panelRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onEsc = (e) =>
      e.key === "Escape" && (setMenuOpen(false), setCoursesOpen(false));
    const onClickOutside = (e) => {
      if (menuOpen && panelRef.current && !panelRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    document.addEventListener("mousedown", onClickOutside);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the desktop Courses dropdown when clicking anywhere outside it
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (!coursesOpen) return;
      // Skip when mobile panel is open; panel manages its own accordion
      if (menuOpen) return;
      // If click is outside the desktop dropdown container, close it
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };
    // Use 'click' so it runs after React onClick to avoid toggling back
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [coursesOpen, menuOpen]);

  const handleRequestCallback = () => {
    // Open the callback modal instead of dispatching event
    setCallbackModalOpen(true);
    // Still dispatch for backward compatibility with hero sections
    window.dispatchEvent(new Event("requestCallback"));
  };

  return (
    <header className="nn-navbar">
      <div className="nn-container">
        <div className="nn-brand">
          <NavLink to="/" aria-label="Geekskul Home">
            <img src={brandLogo} alt="Geekskul" className="brand-logo" />
          </NavLink>
        </div>

        <nav className="nn-center">
          <ul className="nn-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={`nn-dropdown ${coursesOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <button
                className="nn-drop-toggle"
                onClick={() => setCoursesOpen((v) => !v)}
              >
                Courses <FaAngleDown className="nn-chev" />
              </button>
              <ul className="nn-menu">
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
                  <button
                    className="nn-disabled"
                    onClick={() =>
                      alert("This course is currently unavailable.")
                    }
                  >
                    DevOps
                  </button>
                </li>
                <li>
                  <button
                    className="nn-disabled"
                    onClick={() =>
                      alert("This course is currently unavailable.")
                    }
                  >
                    Data analysis Programs
                  </button>
                </li>
                <li>
                  <button
                    className="nn-disabled"
                    onClick={() =>
                      alert("This course is currently unavailable.")
                    }
                  >
                    LevelUp Programs
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/become-a-mentor">Become a mentor</NavLink>
            </li>
            <li>
              <NavLink to="/hire-from-us">Hire from Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="nn-right">
          <button className="nn-cta" onClick={handleRequestCallback}>
            <FaPhoneAlt aria-hidden="true" />
            <span>Request Callback</span>
          </button>
          <button
            className={`nn-icon ${menuOpen ? "active" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        <div
          className={`nn-sheet ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div
            className="nn-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <div className="nn-header">
              <button
                className="nn-icon"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <nav className="nn-nav">
              <NavLink
                to="/"
                className="nn-link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <button
                className="nn-link nn-link--accordion"
                aria-expanded={coursesOpen}
                onClick={() => setCoursesOpen((v) => !v)}
              >
                Courses{" "}
                <FaAngleDown
                  className={`nn-chev ${coursesOpen ? "rotate" : ""}`}
                />
              </button>

              <div className={`nn-accordion ${coursesOpen ? "open" : ""}`}>
                <NavLink
                  to="/java-course"
                  className="nn-sublink"
                  onClick={() => setMenuOpen(false)}
                >
                  Java Full Stack Development
                </NavLink>
                <NavLink
                  to="/mern-course"
                  className="nn-sublink"
                  onClick={() => setMenuOpen(false)}
                >
                  MERN Full Stack Development
                </NavLink>
                <NavLink
                  to="/uiux-course"
                  className="nn-sublink"
                  onClick={() => setMenuOpen(false)}
                >
                  UI/UX
                </NavLink>
                <button
                  className="nn-sublink nn-disabled"
                  onClick={() => {
                    setMenuOpen(false);
                    alert("This course is currently unavailable.");
                  }}
                >
                  DevOps
                </button>
                <button
                  className="nn-sublink nn-disabled"
                  onClick={() => {
                    setMenuOpen(false);
                    alert("This course is currently unavailable.");
                  }}
                >
                  Data analysis Programs
                </button>
                <button
                  className="nn-sublink nn-disabled"
                  onClick={() => {
                    setMenuOpen(false);
                    alert("This course is currently unavailable.");
                  }}
                >
                  LevelUp Programs
                </button>
              </div>

              <NavLink
                to="/become-a-mentor"
                className="nn-link"
                onClick={() => setMenuOpen(false)}
              >
                Become a mentor
              </NavLink>
              <NavLink
                to="/hire-from-us"
                className="nn-link"
                onClick={() => setMenuOpen(false)}
              >
                Hire from Us
              </NavLink>
            </nav>

            <button
              className="nn-cta nn-panel-cta"
              onClick={() => (setMenuOpen(false), handleRequestCallback())}
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>Request Callback</span>
            </button>
          </div>
          {/* Scrim to cover the rest of the screen and hide base navbar */}
          <div className="nn-scrim" onClick={() => setMenuOpen(false)} />
        </div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </header>
  );
};

export default NewNavbar;
