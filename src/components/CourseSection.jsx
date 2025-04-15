import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lefticon from "../assets/icons/left-svg.svg";
import Righticon from "../assets/icons/right-svg.svg";
import "./CourseSection.css";

const CourseSection = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        if (res.data.success) {
          setCourses(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

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

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  const handleDownloadBrochure = (course) => {
    if (course.disabled) return; // Prevent action if disabled
    const fileName =
      course.brochureFileName && course.brochureFileName.trim() !== ""
        ? course.brochureFileName
        : generateSlug(course.title) + ".pdf";
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLearnMore = (course) => {
    if (course.disabled) return; // Prevent navigation if disabled
    navigate(course.courseRoute);
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
          {courses.map((course, index) => (
            <div
              key={course._id || index}
              className={`course-card ${course.disabled ? "disabled" : ""}`}
            >
              <div className="course-card-header">
                <p className="course-subtitle">Unleashing Potential of</p>
                <div className="course-title-div">
                  <h3 className="course-title">{course.title}</h3>
                </div>
              </div>
              <div className="course-body">
                <h4 className="course-subheading">{course.courseSubheading}</h4>
                <div className="course-badge-container">
                  <span className="badge1">
                    Batch Size : {course.batchSize}
                  </span>
                  <span className="badge2">Duration : {course.duration}</span>
                </div>
                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="course-footer">
                <div className="footer-btns">
                  <button
                    className="btn-primary"
                    onClick={() => handleLearnMore(course)}
                  >
                    Learn More
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => handleDownloadBrochure(course)}
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
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
