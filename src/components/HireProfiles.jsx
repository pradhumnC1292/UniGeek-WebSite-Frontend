// import React from "react";
// import "./HireProfiles.css";

// const profiles = [
//   "Java Full Stack Developer",
//   "Frontend Developer",
//   "Backend Developer",
//   "Java Developer",
//   "Software Engineer",
//   "Web Developer",
//   "UI/UX Designer",
//   "MERN Stack Developer",
//   "Node JS Developer",
// ];

// const HireProfiles = () => {
//   return (
//     <section className="hire-profiles-section">
//       <h2 className="hire-profiles-heading">
//         Explore <span>In-Demand</span> Tech Profiles
//       </h2>

//       <div className="hire-profiles-tags">
//         {profiles.map((profile, index) => (
//           <div className="hire-profile-tag" key={index}>
//             {profile}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HireProfiles;

import React from "react";
import "./HireProfiles.css";

const profiles = [
  "Java Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Java Developer",
  "Software Engineer",
  "Web Developer",
  "UI/UX Designer",
  "MERN Stack Developer",
  "Node JS Developer",
];

const HireProfiles = () => {
  return (
    <section className="hp-section" aria-labelledby="hp-heading">
      <div className="hp-wrap">
        <h2 id="hp-heading" className="hp-heading">
          Explore <span>In-Demand</span> Tech Profiles
        </h2>

        <div className="hp-tags" role="list">
          {profiles.map((profile, i) => (
            <span className="hp-tag" role="listitem" key={i} tabIndex={0}>
              {profile}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireProfiles;
