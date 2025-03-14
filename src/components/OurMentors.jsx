// import React from "react";
// import linkedin from "../assets/icons/linkedin02.svg";
// import mentor from "../assets/images/mentor.png";
// // import TypingHeading from "../animation/TypingHeading";
// import "./OurMentors.css";

// const mentorsData = [
//   {
//     id: 1,
//     tag: "Co-Founder",
//     name: "Pradhumn Chandrawat",
//     position: "SDE",
//     company: "UniGeek",
//     experience: "2+ years",
//     linkedin: "https://www.linkedin.com/in/pradhumn/",
//     image: mentor,
//   },
//   {
//     id: 2,
//     tag: "Mentor",
//     name: "Jane Smith",
//     position: "Senior Developer",
//     company: "DesignCo",
//     experience: "5+ years",
//     linkedin: "https://www.linkedin.com/in/janesmith/",
//     image: mentor,
//   },
//   {
//     id: 3,
//     tag: "CTO",
//     name: "Michael Lee",
//     position: "Backend Engineer",
//     company: "DevSolutions",
//     experience: "6+ years",
//     linkedin: "https://www.linkedin.com/in/michaellee/",
//     image: mentor,
//   },
//   {
//     id: 4,
//     tag: "Mentor",
//     name: "Sarah Connor",
//     position: "Full-Stack Developer",
//     company: "Innovatech",
//     experience: "8+ years",
//     linkedin: "https://www.linkedin.com/in/sarahconnor/",
//     image: mentor,
//   },
//   {
//     id: 5,
//     tag: "Mentor",
//     name: "David Kim",
//     position: "Data Scientist",
//     company: "DataCorp",
//     experience: "4+ years",
//     linkedin: "https://www.linkedin.com/in/davidkim/",
//     image: mentor,
//   },
//   {
//     id: 6,
//     tag: "Mentor",
//     name: "Emily Johnson",
//     position: "Frontend Developer",
//     company: "WebWorks",
//     experience: "5+ years",
//     linkedin: "https://www.linkedin.com/in/emilyjohnson/",
//     image: mentor,
//   },
//   {
//     id: 7,
//     tag: "Mentor",
//     name: "Emily Johnson",
//     position: "Frontend Developer",
//     company: "WebWorks",
//     experience: "5+ years",
//     linkedin: "https://www.linkedin.com/in/emilyjohnson/",
//     image: mentor,
//   },
// ];

// const OurMentors = () => {
//   // Duplicate the array for infinite loop sliding

//   const mentors = [...mentorsData, ...mentorsData];

//   //   const mentors = mentorsData;

//   return (
//     <section className="our-mentors-section">
//       <div className="our-mentors-upperDiv">
//         <div className="upper-heading">
//           <h2>
//             “Meet Your <span>Expert</span> Mentors”
//           </h2>
//         </div>
//         <div className="upper-sub-pera">
//           <p>
//             Seasoned software developers with 5+ years of industry experience,
//             passionately guiding you toward success.
//           </p>
//         </div>
//       </div>

//       <div className="our-mentors-lowerDiv">
//         <div className="mentor-slider">
//           {mentors.map((mentorItem, index) => (
//             <div key={index} className="mentor-card">
//               <div className="card-left-div">
//                 <div className="tag-div">
//                   <p id="tag">{mentorItem.tag}</p>
//                 </div>
//                 <div className="name-info-div">
//                   <h5 id="name">{mentorItem.name}</h5>
//                   <p id="position">
//                     {mentorItem.position},{" "}
//                     <span id="company">{mentorItem.company}</span>
//                   </p>
//                   <p id="experience">Experience : {mentorItem.experience}</p>
//                 </div>
//                 <div className="social-link-div">
//                   <a
//                     href={mentorItem.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     id="linkedin"
//                   >
//                     <img src={linkedin} alt="LinkedIn" className="card-img" />
//                   </a>
//                   <a
//                     href={mentorItem.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     id="linkedin"
//                   >
//                     <img src={linkedin} alt="LinkedIn" className="card-img02" />
//                   </a>
//                 </div>
//               </div>

//               <div className="card-right-div">
//                 <img
//                   src={mentorItem.image}
//                   alt={mentorItem.name}
//                   className="mentor-card-img"
//                   id="image"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurMentors;

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
            “Meet Your <span>Expert_DL</span> Mentors”
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
