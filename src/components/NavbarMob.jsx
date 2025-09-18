import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import ReactGA from "react-ga4";
import "./navbar-mob.css";

const RequestCallbackButton = ({ onClick, className = "mob-cta" }) => (
  <button
    className={className}
    onClick={() => {
      window.dispatchEvent(new Event("requestCallback"));
      ReactGA.event({
        category: "Button",
        action: "Click",
        label: "Request Callback",
      });
      onClick?.();
    }}
  >
    <FaPhoneAlt aria-hidden="true" />
    <span>Request Callback</span>
  </button>
);

const NavbarMob = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onEsc = (e) =>
      e.key === "Escape" && (setOpen(false), setCourses(false));
    const onClickOutside = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    document.addEventListener("mousedown", onClickOutside);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = "";
    };
  }, [open]);

  const trackCourseClick = (name) =>
    ReactGA.event({ category: "Course", action: "View", label: name });

  return (
    <header className="mob-nav">
      <div className="mob-wrap">
        <div className="mob-brand">
          <NavLink to="/" className="mob-logo">
            GEEKSKUL
          </NavLink>
        </div>

        <button
          className={`mob-icon-btn ${open ? "active" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </button>

        {/* Fullscreen sheet */}
        <div className={`mob-sheet ${open ? "open" : ""}`} aria-hidden={!open}>
          <div
            className="mob-sheet__panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <div className="mob-sheet__header">
              <button
                className="mob-icon-btn"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <nav className="mob-sheet__nav">
              <NavLink
                to="/"
                className="mob-link"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <button
                className="mob-link mob-link--accordion"
                aria-expanded={courses}
                onClick={() => {
                  setCourses((v) => !v);
                  ReactGA.event({
                    category: "Navigation",
                    action: "Toggle Courses Menu",
                    label: courses ? "Close" : "Open",
                  });
                }}
              >
                Courses{" "}
                <FaAngleDown
                  className={`mob-chev ${courses ? "rotate" : ""}`}
                />
              </button>

              <div className={`mob-accordion ${courses ? "open" : ""}`}>
                <NavLink
                  to="/java-course"
                  className="mob-sublink"
                  onClick={() => {
                    setOpen(false);
                    trackCourseClick("Java Full Stack Development");
                  }}
                >
                  Java Full Stack Development
                </NavLink>
                <NavLink
                  to="/mern-course"
                  className="mob-sublink"
                  onClick={() => {
                    setOpen(false);
                    trackCourseClick("MERN Full Stack Development");
                  }}
                >
                  MERN Full Stack Development
                </NavLink>
                <NavLink
                  to="/uiux-course"
                  className="mob-sublink"
                  onClick={() => {
                    setOpen(false);
                    trackCourseClick("UI/UX");
                  }}
                >
                  UI/UX
                </NavLink>
                <button
                  className="mob-sublink disabled"
                  onClick={() => {
                    setOpen(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("DevOps - Unavailable");
                  }}
                >
                  DevOps
                </button>
                <button
                  className="mob-sublink disabled"
                  onClick={() => {
                    setOpen(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("Data Analysis - Unavailable");
                  }}
                >
                  Data analysis Programs
                </button>
                <button
                  className="mob-sublink disabled"
                  onClick={() => {
                    setOpen(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("LevelUp Programs - Unavailable");
                  }}
                >
                  LevelUp Programs
                </button>
              </div>

              <NavLink
                to="/become-a-mentor"
                className="mob-link"
                onClick={() => setOpen(false)}
              >
                Become a mentor
              </NavLink>
              <NavLink
                to="/hire-from-us"
                className="mob-link"
                onClick={() => setOpen(false)}
              >
                Hire from Us
              </NavLink>
            </nav>

            <RequestCallbackButton
              className="mob-cta mob-sheet__cta"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarMob;
