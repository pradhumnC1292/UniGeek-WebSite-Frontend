// ResponsiveNavbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import ReactGA from "react-ga4";
import "./responsive-navbar.css";

/* ---------- Shared helpers ---------- */
const useBreakpoint = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return {
    isMobile: w < 768,
    isTablet: w >= 768 && w < 1024,
    isDesktop: w >= 1024,
  };
};

const trackCourseClick = (name) =>
  ReactGA.event({ category: "Course", action: "View", label: name });

const RequestCallbackButton = ({ onClick, className = "cta" }) => (
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

/* ---------- Desktop: top pill bar ---------- */
const DesktopNavbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="nav nav--desktop">
      <div className="nav__wrap container">
        <div className="nav__brand">
          <NavLink to="/" className="brand">
            GEEKSKUL
          </NavLink>
        </div>

        <nav className="nav__center">
          <ul className="menu">
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>

            <li className={`dropdown ${open ? "open" : ""}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <button
                className="link link--dropdown"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => {
                  setOpen((v) => !v);
                  ReactGA.event({
                    category: "Navigation",
                    action: "Toggle Courses Menu",
                    label: open ? "Close" : "Open",
                  });
                }}
              >
                Courses <FaAngleDown className="chev" />
              </button>

              <ul className="dropdown__menu" role="menu">
                <li role="none">
                  <NavLink
                    to="/java-course"
                    className="drop-link"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      trackCourseClick("Java Full Stack Development");
                    }}
                  >
                    Java Full Stack Development
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    to="/mern-course"
                    className="drop-link"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      trackCourseClick("MERN Full Stack Development");
                    }}
                  >
                    MERN Full Stack Development
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    to="/uiux-course"
                    className="drop-link"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      trackCourseClick("UI/UX");
                    }}
                  >
                    UI/UX
                  </NavLink>
                </li>
                <li role="none">
                  {/* disabled links still track + inform */}
                  <button
                    className="drop-link disabled"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      alert("This course is currently unavailable.");
                      trackCourseClick("DevOps - Unavailable");
                    }}
                  >
                    DevOps
                  </button>
                </li>
                <li role="none">
                  <button
                    className="drop-link disabled"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      alert("This course is currently unavailable.");
                      trackCourseClick("Data Analysis - Unavailable");
                    }}
                  >
                    Data analysis Programs
                  </button>
                </li>
                <li role="none">
                  <button
                    className="drop-link disabled"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      alert("This course is currently unavailable.");
                      trackCourseClick("LevelUp Programs - Unavailable");
                    }}
                  >
                    LevelUp Programs
                  </button>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/become-a-mentor" className="link">
                Become a mentor
              </NavLink>
            </li>
            <li>
              <NavLink to="/hire-from-us" className="link">
                Hire from Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <RequestCallbackButton />
      </div>
    </header>
  );
};

/* ---------- Tablet: compact bar + right side drawer ---------- */
const TabletNavbar = () => {
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

  return (
    <header className="nav nav--tablet">
      <div className="nav__wrap container">
        <div className="nav__brand">
          <NavLink to="/" className="brand">
            GEEKSKUL
          </NavLink>
        </div>

        <div className="nav__right">
          <RequestCallbackButton className="cta cta--ghost" />
          <button
            className="icon-btn"
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Drawer */}
        <div className={`drawer ${drawer ? "open" : ""}`} aria-hidden={!drawer}>
          <aside
            className="drawer__panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <div className="drawer__header">
              {/* <span className="brand">GEEKSKUL</span> */}
              <button
                className="icon-btn"
                aria-label="Close menu"
                onClick={() => setDrawer(false)}
              >
                <FaTimes />
              </button>
            </div>

            <nav className="drawer__nav">
              <NavLink
                to="/"
                className="drawer__link"
                onClick={() => setDrawer(false)}
              >
                Home
              </NavLink>

              <button
                className="drawer__link drawer__link--accordion"
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
                <FaAngleDown className={`chev ${courses ? "rotate" : ""}`} />
              </button>
              <div className={`drawer__accordion ${courses ? "open" : ""}`}>
                <NavLink
                  to="/java-course"
                  className="drawer__sublink"
                  onClick={() => {
                    setDrawer(false);
                    trackCourseClick("Java Full Stack Development");
                  }}
                >
                  Java Full Stack Development
                </NavLink>
                <NavLink
                  to="/mern-course"
                  className="drawer__sublink"
                  onClick={() => {
                    setDrawer(false);
                    trackCourseClick("MERN Full Stack Development");
                  }}
                >
                  MERN Full Stack Development
                </NavLink>
                <NavLink
                  to="/uiux-course"
                  className="drawer__sublink"
                  onClick={() => {
                    setDrawer(false);
                    trackCourseClick("UI/UX");
                  }}
                >
                  UI/UX
                </NavLink>
                <button
                  className="drawer__sublink disabled"
                  onClick={() => {
                    setDrawer(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("DevOps - Unavailable");
                  }}
                >
                  DevOps
                </button>
                <button
                  className="drawer__sublink disabled"
                  onClick={() => {
                    setDrawer(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("Data Analysis - Unavailable");
                  }}
                >
                  Data analysis Programs
                </button>
                <button
                  className="drawer__sublink disabled"
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
                className="drawer__link"
                onClick={() => setDrawer(false)}
              >
                Become a mentor
              </NavLink>
              <NavLink
                to="/hire-from-us"
                className="drawer__link"
                onClick={() => setDrawer(false)}
              >
                Hire from Us
              </NavLink>
            </nav>

            <RequestCallbackButton
              className="cta drawer__cta"
              onClick={() => setDrawer(false)}
            />
          </aside>

          <div className="drawer__scrim" onClick={() => setDrawer(false)} />
        </div>
      </div>
    </header>
  );
};

/* ---------- Mobile: logo + hamburger, full-screen overlay menu ---------- */
const MobileNavbar = () => {
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

  return (
    <header className="nav nav--mobile">
      <div className="nav__wrap container">
        <div className="nav__brand">
          <NavLink to="/" className="brand">
            GEEKSKUL
          </NavLink>
        </div>

        <div className="nav__right">
          <button
            className={`icon-btn ${open ? "active" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Fullscreen overlay menu */}
        <div className={`sheet ${open ? "open" : ""}`} aria-hidden={!open}>
          <div
            className="sheet__panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <div className="sheet__header">
              <span className="brand">GEEKSKUL</span>
              <button
                className="icon-btn"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <nav className="sheet__nav">
              <NavLink
                to="/"
                className="sheet__link"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <button
                className="sheet__link sheet__link--accordion"
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
                <FaAngleDown className={`chev ${courses ? "rotate" : ""}`} />
              </button>

              <div className={`sheet__accordion ${courses ? "open" : ""}`}>
                <NavLink
                  to="/java-course"
                  className="sheet__sublink"
                  onClick={() => {
                    setOpen(false);
                    trackCourseClick("Java Full Stack Development");
                  }}
                >
                  Java Full Stack Development
                </NavLink>
                <NavLink
                  to="/mern-course"
                  className="sheet__sublink"
                  onClick={() => {
                    setOpen(false);
                    trackCourseClick("MERN Full Stack Development");
                  }}
                >
                  MERN Full Stack Development
                </NavLink>
                <NavLink
                  to="/uiux-course"
                  className="sheet__sublink"
                  onClick={() => {
                    setOpen(false);
                    trackCourseClick("UI/UX");
                  }}
                >
                  UI/UX
                </NavLink>
                <button
                  className="sheet__sublink disabled"
                  onClick={() => {
                    setOpen(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("DevOps - Unavailable");
                  }}
                >
                  DevOps
                </button>
                <button
                  className="sheet__sublink disabled"
                  onClick={() => {
                    setOpen(false);
                    alert("This course is currently unavailable.");
                    trackCourseClick("Data Analysis - Unavailable");
                  }}
                >
                  Data analysis Programs
                </button>
                <button
                  className="sheet__sublink disabled"
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
                className="sheet__link"
                onClick={() => setOpen(false)}
              >
                Become a mentor
              </NavLink>
              <NavLink
                to="/hire-from-us"
                className="sheet__link"
                onClick={() => setOpen(false)}
              >
                Hire from Us
              </NavLink>
            </nav>

            <RequestCallbackButton
              className="cta sheet__cta"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

/* ---------- Wrapper ---------- */
const ResponsiveNavbar = () => {
  const { isDesktop, isTablet, isMobile } = useBreakpoint();
  if (isDesktop) return <DesktopNavbar />;
  if (isTablet) return <TabletNavbar />;
  if (isMobile) return <MobileNavbar />;
  return null;
};

export default ResponsiveNavbar;
