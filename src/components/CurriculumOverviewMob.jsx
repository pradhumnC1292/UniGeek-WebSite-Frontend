import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./CurriculumOverviewMob.css";

const CurriculumOverviewMob = () => {
  // Extract the current URL path and derive the program name
  const location = useLocation();
  const path = location.pathname.slice(1); // e.g., "java-course"
  const program = path.endsWith("-course") ? path.replace("-course", "") : path;
  console.log("Derived program:", program);

  const [curriculums, setCurriculums] = useState([]);
  const [activeModuleId, setActiveModuleId] = useState(null);

  useEffect(() => {
    const fetchCurriculums = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/curriculum", {
          params: { program },
        });
        console.log("Fetched curriculums:", res.data);
        // Normalize API response to always be an array
        const list = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
          ? res.data.data
          : [];
        setCurriculums(list);
      } catch (error) {
        console.error("Error fetching curriculums:", error);
      }
    };

    if (program) {
      fetchCurriculums();
    }
  }, [program]);

  // Helper function to format the description (splitting at the last hyphen)
  const formatDescription = (description) => {
    const lastHyphenIndex = description.lastIndexOf("-");
    if (lastHyphenIndex !== -1) {
      const firstPart = description.substring(0, lastHyphenIndex).trim();
      const secondPart = description.substring(lastHyphenIndex + 1).trim();
      return (
        <>
          {firstPart} | <span className="duration-mob">{secondPart}</span>
        </>
      );
    }
    return description;
  };

  // Toggle the active module. If the same module is clicked, collapse it.
  const toggleModule = (id) => {
    setActiveModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="curriculum-sec-mob">
      <div className="curriculum-heading-mob">
        <h2 className="curriculum-title-mob">
          “Course built to prepare you for <span>success</span>”
        </h2>
        <p className="curriculum-sub-heading-mob">
          Curriculum crafted by seasoned developers with 5+ years of experience
          at top-tier companies
        </p>
      </div>

      <div className="curriculum-accordion-mob">
        {Array.isArray(curriculums) &&
          curriculums.map((curriculum) => (
            <div key={curriculum._id} className="accordion-item-mob">
              {/* Accordion Header */}
              <div
                className="accordion-header-mob"
                onClick={() => toggleModule(curriculum._id)}
              >
                <h4 className="module-title-mob">{curriculum.title}</h4>
                <p className="module-description-mob">
                  {formatDescription(curriculum.description)}
                </p>
              </div>

              {/* Accordion Content */}
              {activeModuleId === curriculum._id && (
                <div className="accordion-content-mob">
                  {/* Single-column container for all details */}
                  <div className="curriculum-details-column-mob">
                    {/* Summary Section */}
                    <div className="curriculum-section-mob">
                      <h4 className="section-title-mob">Summary</h4>
                      <ul>
                        {curriculum.details?.summary?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Subtopics */}
                    {curriculum.details?.subtopics?.map((topic, idx) => (
                      <div key={idx} className="curriculum-section-mob">
                        <h4 className="section-title-mob">{topic.heading}</h4>
                        <ul>
                          {topic.points?.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Outcome */}
                    {curriculum.details?.outcome && (
                      <div className="curriculum-section-mob">
                        <h4 className="section-title-mob">Outcome</h4>
                        <ul>
                          {curriculum.details.outcome.map((out, outIdx) => (
                            <li key={outIdx}>{out}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tools */}
                    {curriculum.details?.tools && (
                      <div className="curriculum-section-mob">
                        <h4 className="section-title-mob">Tools</h4>
                        <ul>
                          {curriculum.details.tools.map((tool, tIdx) => (
                            <li key={tIdx}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default CurriculumOverviewMob;
