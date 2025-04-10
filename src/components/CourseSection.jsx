import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lefticon from "../assets/icons/left-svg.svg";
import Righticon from "../assets/icons/right-svg.svg";
import "./CourseSection.css";

const CourseSection = () => {
  const courseRoutes = {
    "Java Full-Stack Programm": "/java-course",
    "MERN Full-Stack Programm": "/mern-course",
    "Learn UI / UX": "/uiux-course",
    "Level-Up Programm": "/levelup-course",
  };

  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Helper function to generate a slug from a course title.
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  // Function to handle PDF download for a specific course
  const handleDownloadBrochure = (courseTitle) => {
    // Create a file name based on the course title slug
    const fileName = generateSlug(courseTitle) + ".pdf";
    const link = document.createElement("a");
    // Assuming the PDF is stored in the public folder at the root.
    link.href = `/${fileName}`;
    // Set the filename for download
    link.setAttribute("download", fileName);
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="course-section" data-scroll-section>
      <div className="title-div">
        <h2 className="course-heading" data-scroll data-scroll-speed="2">
          “Curated <span>Courses</span> to Boost Your <span>Career</span>”
        </h2>
        <div className="pera-div">
          <p className="course-sub-pera">
            Explore in-demand skills and industry‑focused curricula designed to
            supercharge your professional journey.
          </p>
        </div>
      </div>
      <div className="course-section-content">
        <div className="courses-slider" ref={sliderRef}>
          {/* Course Card 1 */}
          <div className="course-card">
            <div className="course-card-header">
              <p className="course-subtitle">Unleashing Potential of</p>
              <div className="course-title-div">
                <h3 className="course-title">Java Full-Stack Programm</h3>
              </div>
            </div>
            <div className="course-body">
              <h4 className="course-subheading">
                DSA, JAVA, React JS, SpringBoot & More
              </h4>
              <div className="course-badge-container">
                <span className="badge1">Batch Size : 50</span>
                <span className="badge2">Duration : 10 Months</span>
              </div>
              <ul className="course-features">
                <li>
                  <strong>300+</strong> DSA Problems
                </li>
                <li>
                  <strong>5+</strong> Industry Relevant Projects in Every Module
                </li>
                <li>
                  Experience the Future with Our <strong>AI-Powered</strong>{" "}
                  Curriculum
                </li>
                <li>
                  <strong>100%</strong> Placement Support
                </li>
                <li>
                  Learn <strong>DSA</strong>, <strong>Java</strong>,{" "}
                  <strong>React JS</strong>, <strong>SpringBoot</strong> and{" "}
                  <strong>AWS</strong>
                </li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="footer-btns">
                <button
                  className="btn-primary"
                  onClick={() =>
                    navigate(courseRoutes["Java Full-Stack Programm"])
                  }
                >
                  Learn More
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleDownloadBrochure("Java Full-Stack Programm")
                  }
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          {/* Course Card 2 */}
          <div className="course-card">
            <div className="course-card-header">
              <p className="course-subtitle">Unleashing Potential of</p>
              <div className="course-title-div">
                <h3 className="course-title">MERN Full-Stack Programm</h3>
              </div>
            </div>
            <div className="course-body">
              <h4 className="course-subheading">
                Mongo Db, Express JS, React JS & Node JS
              </h4>
              <div className="course-badge-container">
                <span className="badge1">Batch Size : 50</span>
                <span className="badge2">Duration : 9 Months</span>
              </div>
              <ul className="course-features">
                <li>
                  <strong>300+</strong> DSA Problems
                </li>
                <li>
                  <strong>5+</strong> Industry Relevant Projects in Every Module
                </li>
                <li>
                  Experience the Future with Our <strong>AI-Powered</strong>{" "}
                  Curriculum
                </li>
                <li>
                  <strong>100%</strong> Placement Support
                </li>
                <li>
                  Learn <strong>DSA</strong>, <strong>React JS</strong>,{" "}
                  <strong>Node JS</strong> and <strong>AWS</strong>
                </li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="footer-btns">
                <button
                  className="btn-primary"
                  onClick={() =>
                    navigate(courseRoutes["MERN Full-Stack Programm"])
                  }
                >
                  Learn More
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleDownloadBrochure("MERN Full-Stack Programm")
                  }
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          {/* Course Card 3 */}
          <div className="course-card">
            <div className="course-card-header">
              <p className="course-subtitle">Unleashing Potential of</p>
              <div className="course-title-div">
                <h3 className="course-title">Learn UI / UX</h3>
              </div>
            </div>
            <div className="course-body">
              <h4 className="course-subheading">
                Basic UI/UX, UI/UX Principle & Behaviour, Mastering Figma
                In-Depth
              </h4>
              <div className="course-badge-container">
                <span className="badge1">Batch Size : 50</span>
                <span className="badge2">Duration : 3.5 Months</span>
              </div>
              <ul className="course-features">
                <li>
                  Experience the Future with Our <strong>AI-Powered</strong>{" "}
                  Curriculum
                </li>
                <li>
                  <strong>100%</strong> Placement Support
                </li>
                <li>
                  Learn <strong>UI/UX</strong>, <strong>UX Principle</strong>,{" "}
                  <strong>Laws of UX</strong>, <strong>Design Tools</strong>
                </li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="footer-btns">
                <button
                  className="btn-primary"
                  onClick={() => navigate(courseRoutes["Learn UI / UX"])}
                >
                  Learn More
                </button>
                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleDownloadBrochure("MERN Full-Stack Programm")
                  }
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          {/* Course Card 4 */}
          <div className="course-card">
            <div className="course-card-header">
              <p className="course-subtitle">Unleashing Potential of</p>
              <div className="course-title-div">
                <h3 className="course-title">DevOps Programm</h3>
              </div>
            </div>
            <div className="course-body">
              <h4 className="course-subheading">
                DSA, System Design, SpringBoot & More
              </h4>
              <div className="course-badge-container">
                <span className="badge1">Batch Size : 50</span>
                <span className="badge2">Duration : 9 Months</span>
              </div>
              <ul className="course-features">
                <li>
                  <strong>300+</strong> DSA Problems
                </li>
                <li>
                  <strong>5+</strong> Industry Relevant Projects in Every Module
                </li>
                <li>
                  <strong>100%</strong> Placement Support
                </li>
                <li>
                  Learn <strong>DSA</strong>, <strong>Java</strong>,{" "}
                  <strong>System Design</strong>, <strong>SpringBoot</strong>{" "}
                  and <strong>AWS</strong>
                </li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="footer-btns">
                <button
                  className="btn-primary"
                  onClick={() => navigate(courseRoutes["Level-Up Programm"])}
                >
                  Learn More
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleDownloadBrochure("MERN Full-Stack Programm")
                  }
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-card-header">
              <p className="course-subtitle">Unleashing Potential of</p>
              <div className="course-title-div">
                <h3 className="course-title">Data analysis Programm</h3>
              </div>
            </div>
            <div className="course-body">
              <h4 className="course-subheading">
                DSA, System Design, SpringBoot & More
              </h4>
              <div className="course-badge-container">
                <span className="badge1">Batch Size : 50</span>
                <span className="badge2">Duration : 9 Months</span>
              </div>
              <ul className="course-features">
                <li>
                  <strong>300+</strong> DSA Problems
                </li>
                <li>
                  <strong>5+</strong> Industry Relevant Projects in Every Module
                </li>
                <li>
                  <strong>100%</strong> Placement Support
                </li>
                <li>
                  Learn <strong>DSA</strong>, <strong>Java</strong>,{" "}
                  <strong>System Design</strong>, <strong>SpringBoot</strong>{" "}
                  and <strong>AWS</strong>
                </li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="footer-btns">
                <button
                  className="btn-primary"
                  onClick={() => navigate(courseRoutes["Level-Up Programm"])}
                >
                  Learn More
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleDownloadBrochure("MERN Full-Stack Programm")
                  }
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-card-header">
              <p className="course-subtitle">Unleashing Potential of</p>
              <div className="course-title-div">
                <h3 className="course-title">Level-Up Programm</h3>
              </div>
            </div>
            <div className="course-body">
              <h4 className="course-subheading">
                DSA, System Design, SpringBoot & More
              </h4>
              <div className="course-badge-container">
                <span className="badge1">Batch Size : 50</span>
                <span className="badge2">Duration : 9 Months</span>
              </div>
              <ul className="course-features">
                <li>
                  <strong>300+</strong> DSA Problems
                </li>
                <li>
                  <strong>5+</strong> Industry Relevant Projects in Every Module
                </li>
                <li>
                  <strong>100%</strong> Placement Support
                </li>
                <li>
                  Learn <strong>DSA</strong>, <strong>Java</strong>,{" "}
                  <strong>System Design</strong>, <strong>SpringBoot</strong>{" "}
                  and <strong>AWS</strong>
                </li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="footer-btns">
                <button
                  className="btn-primary"
                  onClick={() => navigate(courseRoutes["Level-Up Programm"])}
                >
                  Learn More
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleDownloadBrochure("MERN Full-Stack Programm")
                  }
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Lefticon}
          alt="Left Arrow"
          className="slider-arrow left-arrow"
          onClick={scrollLeft}
        />
        <img
          src={Righticon}
          alt="Right Arrow"
          className="slider-arrow right-arrow"
          onClick={scrollRight}
        />
      </div>
    </section>
  );
};

export default CourseSection;
