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

  const courses = [
    {
      title: "MERN Full Stack Development",
      courseSubheading: "Build full stack apps with React, Node, and MongoDB.",
      batchSize: "50 Students",
      duration: "10 Months",
      features: [
        "Data Structures & Algorithms (DSA) with problem-solving",
        "React 19 with modern patterns & components",
        "Node.js & Express.js with API design",
        "MongoDB schema design & performance tuning",
        "Cloud deploys with AWS/Vercel & CI/CD pipeline",
      ],
      disabled: false,
    },
    {
      title: "Java Full Stack Development",
      courseSubheading:
        "Learn Spring Boot backend with modern frontend skills.",
      batchSize: "50 Students",
      duration: "10 Months",
      features: [
        "Data Structures & Algorithms (DSA) with efficiency focus",
        "Core Java & concurrency essentials",
        "Spring Boot microservices & REST APIs",
        "SQL & NoSQL integration with optimization",
        "Dockerization & CI/CD best practices",
      ],
      disabled: false,
    },
    {
      title: "UI/UX Design",
      courseSubheading: "Design modern, user-centered digital experiences.",
      batchSize: "50 Students",
      duration: "4 Months",
      features: [
        "Figma mastery & design systems",
        "User research & usability testing",
        "Cognitive load & color psychology",
        "Gestalt principles & layout clarity",
        "Designing AI tool interfaces & workflows",
      ],
      disabled: false,
    },
    {
      title: "DevOps",
      courseSubheading: "Automate, deploy, and scale apps with DevOps tools.",
      batchSize: "50 Students",
      duration: "10 Months",
      features: [
        "Data Structures & Algorithms (DSA) for scripting",
        "Linux, shell & Git workflows",
        "Docker & Kubernetes orchestration",
        "Infrastructure as Code with Terraform",
        "Observability with logs, metrics & tracing",
      ],
      disabled: true,
    },
    {
      title: "AI/ML",
      courseSubheading: "Learn AI, ML, and deep learning with real projects.",
      batchSize: "50 Students",
      duration: "12 Months",
      features: [
        "Data Structures & Algorithms (DSA) for ML coding",
        "Math for ML: linear algebra & probability",
        "Classical ML models & feature engineering",
        "Deep learning with TensorFlow & PyTorch",
        "LLMs, GenAI & model deployment practices",
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

  const getCourseRoute = (title) => {
    const routeMap = {
      "Java Full Stack Development": "/java-course",
      "MERN Full Stack Development": "/mern-course",
      "UI/UX Design": "/uiux-course",
      DevOps: "/devops-course",
      "AI/ML": "/learn-ai-ml-course",
    };
    return routeMap[title] || "/";
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
    const route = getCourseRoute(course.title);
    navigate(route);
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
