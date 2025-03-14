import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./EdtechNavbar.css";

const EdtechNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Optional: track which menu item is active, e.g. for highlight
  const [activeLink, setActiveLink] = useState("#home");

  // For the dropdown inside "Courses"
  const [coursesOpen, setCoursesOpen] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    // If main menu closes, also close the courses dropdown
    if (toggleMenu) {
      setCoursesOpen(false);
    }
  };

  const handleCoursesToggle = () => {
    setCoursesOpen(!coursesOpen);
  };

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setToggleMenu(false);
    setCoursesOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* LOGO */}
        <a
          href="#home"
          className="nav__logo"
          onClick={() => handleLinkClick("#home")}
        >
          UniGeek
        </a>

        {/* MAIN MENU */}
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleLinkClick("#home")}
                className={`nav__link ${
                  activeLink === "#home" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item nav__dropdown">
              <a
                className="nav__link dropdown__toggle"
                onClick={handleCoursesToggle}
              >
                <i className="uil uil-books nav__icon"></i>
                Courses <FaAngleDown style={{ marginLeft: "5px" }} />
              </a>

              {coursesOpen && (
                <ul className="dropdown__menu">
                  <li>
                    <a
                      href="#course1"
                      onClick={() => handleLinkClick("#course1")}
                    >
                      Java Full Stack Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#course2"
                      onClick={() => handleLinkClick("#course2")}
                    >
                      MERN Full Stack Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#course3"
                      onClick={() => handleLinkClick("#course3")}
                    >
                      UI/UX
                    </a>
                  </li>
                  <li>
                    <a
                      href="#course4"
                      onClick={() => handleLinkClick("#course4")}
                    >
                      LevelUp Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#course5"
                      onClick={() => handleLinkClick("#course5")}
                    >
                      Data Science & Gen-AI
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav__item">
              <a
                href="#mentor"
                onClick={() => handleLinkClick("#mentor")}
                className={`nav__link ${
                  activeLink === "#mentor" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-graduation-cap"></i>
                Become a mentor
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className={`nav__link ${
                  activeLink === "#contact" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-message nav__icon"></i> Contact Us
              </a>
            </li>
          </ul>
          {/* CLOSE ICON */}
          <i
            className="uil uil-times nav__close"
            onClick={handleToggleMenu}
          ></i>
        </div>

        {/* HAMBURGER ICON */}
        <div className="nav__toggle" onClick={handleToggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default EdtechNavbar;
