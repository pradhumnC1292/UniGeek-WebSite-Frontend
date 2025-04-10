import React, { useEffect, useState } from "react";
import axios from "axios";
import linkedin from "../assets/icons/linkedin02.svg";
import "./OurMentors.css";

const OurMentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/mentors");
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };
    fetchMentors();
  }, []);

  // Duplicate mentors array for infinite loop sliding, if desired.
  const mentorsToDisplay = [...mentors, ...mentors];

  return (
    <section className="our-mentors-section" data-scroll-section>
      <div className="our-mentors-upperDiv">
        <div className="upper-heading">
          <h2 data-scroll data-scroll-speed="1">
            “Meet Your <span>Expert</span> Mentors”
          </h2>
        </div>
        <div className="upper-sub-pera">
          <p data-scroll data-scroll-speed="1">
            Seasoned software developers with 5+ years of industry experience,
            passionately guiding you toward success.
          </p>
        </div>
      </div>
      <div className="our-mentors-lowerDiv">
        <div className="mentor-slider">
          {mentorsToDisplay.map((mentor, index) => (
            <div key={mentor._id || index} className="mentor-card">
              <div className="card-left-div">
                <div className="tag-div">
                  <p id="tag">{mentor.tag}</p>
                </div>
                <div className="name-info-div">
                  <h5 id="name">{mentor.name}</h5>
                  <p id="position">
                    {mentor.position},{" "}
                    <span id="company">{mentor.company}</span>
                  </p>
                  <p id="experience">Experience : {mentor.experience}</p>
                </div>
                <div className="social-link-div">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="linkedin"
                  >
                    <img src={linkedin} alt="LinkedIn" className="card-img" />
                  </a>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="linkedin"
                  >
                    <img src={linkedin} alt="LinkedIn" className="card-img02" />
                  </a>
                </div>
              </div>
              <div className="card-right-div">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-card-img"
                  id="image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMentors;
