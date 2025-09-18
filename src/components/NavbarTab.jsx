import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import ReactGA from "react-ga4";
import "./navbar-tab.css";

const RequestCallbackButton = ({
  onClick,
  className = "tab-cta tab-cta--ghost",
}) => (
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

const NavbarTab = () => {
  const [drawer, setDrawer] = useState(false);
  const [courses, setCourses] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onEsc = (e) =>
      e.key === "Escape" && (setDrawer(false), setCourses(false));
    const onClickOutside = (e) => {
      if (drawer && panelRef.current && !panelRef.current.contains(e.target))
        setDrawer(false);
    };
    document.addEventListener("keydown", onEsc);
    document.addEventListener("mousedown", onClickOutside);
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const trackCourseClick = (name) =>
    ReactGA.event({ category: "Course", action: "View", label: name });

  return (
    <header className="tab-nav">
      <div className="tab-wrap">
        <div className="tab-brand">
          <NavLink to="/" className="tab-logo">
            GEEKSKUL
          </NavLink>
        </div>

        <div className="tab-right">
          <RequestCallbackButton />
          <button
            className="tab-icon-btn"
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`tab-drawer ${drawer ? "open" : ""}`}
          aria-hidden={!drawer}
        >
          <aside
            className="tab-drawer__panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <div className="tab-drawer__header">
              <span className="tab-logo">GEEKSKUL</span>
              <button
                className="tab-icon-btn"
                aria-label="Close menu"
                onClick={() => setDrawer(false)}
              >
                <FaTimes />
              </button>
            </div>

            <nav className="tab-drawer__nav">
              <NavLink
                to="/"
                className="tab-link"
                onClick={() => setDrawer(false)}
              >
                Home
              </NavLink>

              <button
                className="tab-link tab-link--accordion"
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
                  className={`tab-chev ${courses ? "rotate" : ""}`}
                />
              </button>

              <div className={`tab-accordion ${courses ? "open" : ""}`}>
                <NavLink
                  to="/java-course"
                  className="tab-sublink"
                  onClick={() => {
                    setDrawer(false);
                    trackCourseClick("Java Full Stack Development");
                  }}
                >
                  Java Full Stack Development
                </NavLink>
                <NavLink
                  to="/mern-course"
                  className="tab-sublink"
                  onClick={() => {
                    setDrawer(false);
                    trackCourseClick("MERN Full Stack Development");
                  }}
                >
                  MERN Full Stack Development
                </NavLink>
                <NavLink
                  to="/uiux-course"
                  className="tab-sublink"
                  onClick={() => {
                    setDrawer(false);
                    trackCourseClick("UI/UX");
                  }}
                >
                  UI/UX
                </NavLink>
                <button
                  className="tab-sublink disabled"
                  onClick={() => {
                    setDrawer(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("DevOps - Unavailable");
                  }}
                >
                  DevOps
                </button>
                <button
                  className="tab-sublink disabled"
                  onClick={() => {
                    setDrawer(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("Data Analysis - Unavailable");
                  }}
                >
                  Data analysis Programs
                </button>
                <button
                  className="tab-sublink disabled"
                  onClick={() => {
                    setDrawer(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("LevelUp Programs - Unavailable");
                  }}
                >
                  LevelUp Programs
                </button>
              </div>

              <NavLink
                to="/become-a-mentor"
                className="tab-link"
                onClick={() => setDrawer(false)}
              >
                Become a mentor
              </NavLink>
              <NavLink
                to="/hire-from-us"
                className="tab-link"
                onClick={() => setDrawer(false)}
              >
                Hire from Us
              </NavLink>
            </nav>

            <RequestCallbackButton
              className="tab-cta tab-drawer__cta"
              onClick={() => setDrawer(false)}
            />
          </aside>

          <div className="tab-drawer__scrim" onClick={() => setDrawer(false)} />
        </div>
      </div>
    </header>
  );
};

export default NavbarTab;
