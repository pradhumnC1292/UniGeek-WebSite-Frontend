// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Lefticon from "../assets/icons/left-svg.svg";
// import Righticon from "../assets/icons/right-svg.svg";
// import "./CourseSection.css";

// const CourseSection = () => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/courses");
//         if (res.data.success) {
//           setCourses(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const scrollLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
//     }
//   };

//   const generateSlug = (title) => {
//     return title.toLowerCase().replace(/\s+/g, "-");
//   };

//   const handleDownloadBrochure = (course) => {
//     if (course.disabled) return; // Prevent action if disabled
//     const fileName =
//       course.brochureFileName && course.brochureFileName.trim() !== ""
//         ? course.brochureFileName
//         : generateSlug(course.title) + ".pdf";
//     const link = document.createElement("a");
//     link.href = `/${fileName}`;
//     link.setAttribute("download", fileName);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleLearnMore = (course) => {
//     if (course.disabled) return; // Prevent navigation if disabled
//     navigate(course.courseRoute);
//   };

//   return (
//     <section className="course-section" data-scroll-section>
//       <div className="title-div">
//         <h2 className="course-heading" data-scroll data-scroll-speed="2">
//           “Curated <span>Courses</span> to Boost Your <span>Career</span>”
//         </h2>
//         <div className="pera-div">
//           <p className="course-sub-pera">
//             Explore in-demand skills and industry‑focused curricula designed to
//             supercharge your professional journey.
//           </p>
//         </div>
//       </div>
//       <div className="course-section-content">
//         <div className="courses-slider" ref={sliderRef}>
//           {courses.map((course, index) => (
//             <div
//               key={course._id || index}
//               className={`course-card ${course.disabled ? "disabled" : ""}`}
//             >
//               <div className="course-card-header">
//                 <p className="course-subtitle">Unleashing Potential of</p>
//                 <div className="course-title-div">
//                   <h3 className="course-title">{course.title}</h3>
//                 </div>
//               </div>
//               <div className="course-body">
//                 <h4 className="course-subheading">{course.courseSubheading}</h4>
//                 <div className="course-badge-container">
//                   <span className="badge1">
//                     Batch Size : {course.batchSize}
//                   </span>
//                   <span className="badge2">Duration : {course.duration}</span>
//                 </div>
//                 <ul className="course-features">
//                   {course.features.map((feature, idx) => (
//                     <li key={idx}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="course-footer">
//                 <div className="footer-btns">
//                   <button
//                     className="btn-primary"
//                     onClick={() => handleLearnMore(course)}
//                   >
//                     Learn More
//                   </button>
//                   <button
//                     className="btn-secondary"
//                     onClick={() => handleDownloadBrochure(course)}
//                   >
//                     Download Brochure
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <img
//           src={Lefticon}
//           alt="Left Arrow"
//           className="slider-arrow left-arrow"
//           onClick={scrollLeft}
//         />
//         <img
//           src={Righticon}
//           alt="Right Arrow"
//           className="slider-arrow right-arrow"
//           onClick={scrollRight}
//         />
//       </div>
//     </section>
//   );
// };

// export default CourseSection;

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lefticon from "../assets/icons/left-svg.svg";
import Righticon from "../assets/icons/right-svg.svg";
import "./CourseSection.css";

const CourseSection = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Static JSON for courses
  const courses = [
    {
      title: "MERN Full Stack Development",
      courseSubheading:
        "Build scalable full stack apps with AI-powered workflows",
      batchSize: "50 Students",
      duration: "10 Months",
      features: [
        "React 19 with AI-assisted components",
        "Node.js & Express.js with AI-enhanced debugging",
        "MongoDB with AI query optimization",
        "Integration of AI-driven search and recommendations",
      ],
      disabled: false,
    },
    {
      title: "Java Full Stack Development",
      courseSubheading:
        "Master Java backend and frontend with AI-driven solutions",
      batchSize: "50 Students",
      duration: "10 Months",
      features: [
        "Spring Boot with AI-powered error detection",
        "SQL & NoSQL databases optimized with AI",
        "Frontend with React + AI code suggestions",
        "Deploying intelligent APIs with AI/ML support",
      ],
      disabled: false,
    },
    {
      title: "UI/UX Design",
      courseSubheading: "Create user experiences enhanced with AI tools",
      batchSize: "50 Students",
      duration: "4 Months",
      features: [
        "AI-powered wireframing and prototyping with Figma plugins",
        "User research using AI sentiment analysis",
        "AI-based accessibility and color contrast tools",
        "Automated design testing with AI analytics",
      ],
      disabled: false,
    },
    {
      title: "DevOps",
      courseSubheading: "Streamline deployments with AI-driven automation",
      batchSize: "50 Students",
      duration: "10 Months",
      features: [
        "CI/CD pipelines with AI monitoring",
        "Container orchestration (Docker, Kubernetes) with AI scaling",
        "AI-driven system health and anomaly detection",
        "Automated security testing using AI tools",
      ],
      disabled: true,
    },
    {
      title: "AI/ML",
      courseSubheading:
        "Deep dive into artificial intelligence and machine learning",
      batchSize: "50 Students",
      duration: "12 Months",
      features: [
        "Supervised & unsupervised learning",
        "Deep learning with TensorFlow & PyTorch",
        "AI-powered applications in NLP and Computer Vision",
        "Generative AI and LLMs integration",
      ],
      disabled: true,
    },
  ];

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
    navigate(`/courses/${generateSlug(course.title)}`);
  };

  return (
    <section className="course-section" data-scroll-section>
      <div className="title-div">
        <h2 className="course-heading" data-scroll data-scroll-speed="2">
          “Curated <span>Courses</span> to Boost Your <span>Career</span>”
        </h2>
        <div className="pera-div">
          <p className="course-sub-pera">
            Explore in-demand skills and industry-focused curricula designed to
            supercharge your professional journey.
          </p>
        </div>
      </div>
      <div className="course-section-content">
        <div className="courses-slider" ref={sliderRef}>
          {courses.map((course, index) => (
            <div
              key={index}
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
