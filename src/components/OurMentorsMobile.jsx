import React, { useState, useEffect } from "react";
import axios from "axios";
import linkedin from "../assets/icons/linkedin02.svg";
import "./OurMentors.css";

const OurMentorsMobile = () => {
  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/mentors");
        console.log(data);
        setMentor(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };
    fetchMentors();
  }, []);

  if (mentor.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className="our-mentors-section mobile" data-scroll-section>
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
      <div className="our-mentors-lowerDiv scrollable">
        <div className="mentor-sliderr">
          {mentor.map((mentor, index) => (
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
                  <p id="experience">Experience: {mentor.experience}</p>
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

export default OurMentorsMobile;
