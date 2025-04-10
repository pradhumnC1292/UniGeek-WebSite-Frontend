import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./CurriculumOverview.css";

const CurriculumOverview = () => {
  // Use the location hook to get the current URL pathname
  const location = useLocation();
  // For URLs like "/java-course" or "/mern-course"
  const path = location.pathname.slice(1); // Removes the leading "/" e.g., "java-course"
  // Remove the "-course" suffix to derive the program (e.g., "java", "mern", "uiux")
  const program = path.endsWith("-course") ? path.replace("-course", "") : path;
  console.log("Derived program:", program);

  const [curriculums, setCurriculums] = useState([]);
  const [selectedCurriculumId, setSelectedCurriculumId] = useState(null);

  useEffect(() => {
    const fetchCurriculums = async () => {
      try {
        // Pass the derived program as a query parameter
        const res = await axios.get("http://localhost:5000/api/curriculum", {
          params: { program },
        });
        console.log("Fetched curriculums:", res.data);
        setCurriculums(res.data);
        if (res.data.length > 0) {
          setSelectedCurriculumId(res.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching curriculums:", error);
      }
    };

    if (program) {
      fetchCurriculums();
    }
  }, [program]);

  const selectedCurriculum = curriculums.find(
    (curr) => curr._id === selectedCurriculumId
  );

  // Improved Helper function to split only at the last occurrence of "-"
  const formatDescription = (description) => {
    const lastHyphenIndex = description.lastIndexOf("-");

    if (lastHyphenIndex !== -1) {
      const firstPart = description.substring(0, lastHyphenIndex).trim();
      const secondPart = description.substring(lastHyphenIndex + 1).trim();
      return (
        <>
          {firstPart} | <span className="duration">{secondPart}</span>
        </>
      );
    }
    return description;
  };

  return (
    <section className="curriculum-sec">
      <div className="curriculum-heading">
        <h2 className="curriculum-title">
          “Course built to prepare you for <span>success</span>”
        </h2>
        <p className="curriculum-sub-heading">
          Curriculum crafted by seasoned developers with 5+ years of experience
          at top-tier companies
        </p>
      </div>
      <div className="curriculum-container">
        <div className="curriculum-left-panel">
          <h3 className="left-panel-heading">Course Modules</h3>
          {curriculums.map((curriculum) => (
            <div
              key={curriculum._id}
              onClick={() => setSelectedCurriculumId(curriculum._id)}
              className={`module-item ${
                selectedCurriculumId === curriculum._id
                  ? "module-item-active"
                  : ""
              }`}
            >
              <h4 className="module-title">{curriculum.title}</h4>
              <p className="module-description">
                {formatDescription(curriculum.description)}
              </p>
            </div>
          ))}
        </div>

        <div className="curriculum-right-panel">
          <h3 className="right-panel-heading">Details</h3>
          {selectedCurriculum && (
            <div>
              {/* Single-column Summary section */}
              <div className="curriculum-section">
                <h4 className="section-title">Summary</h4>
                <ul>
                  {selectedCurriculum.details.summary.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Two-column grid for subtopics, outcome, and tools */}
              <div className="curriculum-details-grid">
                {/* Subtopics */}
                {selectedCurriculum.details.subtopics.map((topic, idx) => (
                  <div key={idx} className="curriculum-section">
                    <h4 className="section-title">{topic.heading}</h4>
                    <ul>
                      {topic.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Outcome */}
                {selectedCurriculum.details.outcome && (
                  <div className="curriculum-section">
                    <h4 className="section-title">Outcome</h4>
                    <ul>
                      {selectedCurriculum.details.outcome.map((out, outIdx) => (
                        <li key={outIdx}>{out}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tools */}
                {selectedCurriculum.details.tools && (
                  <div className="curriculum-section">
                    <h4 className="section-title">Tools</h4>
                    <ul>
                      {selectedCurriculum.details.tools.map((tool, tIdx) => (
                        <li key={tIdx}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurriculumOverview;
