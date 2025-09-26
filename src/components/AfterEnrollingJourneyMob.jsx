// import React from "react";
// import "./AfterEnrollingJourneyMob.css";

// const AfterEnrollingJourneyMob = () => {
//   return (
//     <section className="aej-sec" id="education">
//       <h2 className="mobile-heading" data-scroll data-scroll-speed="2">
//         Your Learning <span>Journey</span> Begins Here
//       </h2>
//       <p className="mobile-subheading" data-scroll data-scroll-speed="2">
//         Your Complete Step-by-Step Roadmap to Becoming a Confident, Job-Ready
//         Developer Ready to Thrive in the Tech Industry
//       </p>

//       <div className="aej__container container">
//         <div className="aej__tabs">
//           <div className="aej__button aej__active button--flex"></div>
//         </div>

//         <div className="aej__section">
//           <div className="aej__content ">
//             <div className="aej__data">
//               <div>
//                 <h3 className="aej__title">Start with Programming</h3>
//                 <span className="aej__subtitle">
//                   Begin your journey by learning the basics of programming,
//                   laying a strong foundation for all that follows
//                 </span>
//               </div>
//               <div>
//                 <span className="aej__rounder"></span>
//                 <span className="aej__line"></span>
//               </div>
//             </div>

//             <div className="aej__data">
//               <div></div>
//               <div>
//                 <span className="aej__rounder"></span>
//                 <span className="aej__line"></span>
//               </div>
//               <div>
//                 <h3 className="aej__title">Daily Live Coding Mastery</h3>
//                 <span className="aej__subtitle">
//                   Elevate your skills with interactive, daily live classes that
//                   turn you into a confident coder.
//                 </span>
//               </div>
//             </div>

//             <div className="aej__data">
//               <div>
//                 <h3 className="aej__title">Dive into Hackathons</h3>
//                 <span className="aej__subtitle">
//                   Put your knowledge to the test in exciting hackathons, where
//                   you'll solve real challenges and learn to think on your feet.
//                 </span>
//               </div>
//               <div>
//                 <span className="aej__rounder"></span>
//                 <span className="aej__line"></span>
//               </div>
//             </div>

//             <div className="aej__data">
//               <div></div>
//               <div>
//                 <span className="aej__rounder"></span>
//                 <span className="aej__line"></span>
//               </div>
//               <div>
//                 <h3 className="aej__title">Build Reacl-World Projects</h3>
//                 <span className="aej__subtitle">
//                   Once you conquer hackathons, you'll work on production-ready
//                   projects that mirror industry demands.
//                 </span>
//               </div>
//             </div>

//             <div className="aej__data">
//               <div>
//                 <h3 className="aej__title">Exclusive Mock Interviews</h3>
//                 <span className="aej__subtitle">
//                   Clear these hurdles to qualify for our specialized in-house
//                   mock interviews, designed to refine your professional skills.
//                 </span>
//               </div>
//               <div>
//                 <span className="aej__rounder"></span>
//                 <span className="aej__line"></span>
//               </div>
//             </div>

//             <div className="aej__data">
//               <div></div>
//               <div>
//                 <span className="aej__rounder"></span>
//                 <span className="aej__line"></span>
//               </div>
//               <div>
//                 <h3 className="aej__title">Get Placement Ready</h3>
//                 <span className="aej__subtitle">
//                   With every step successfully completed and no backlogs, you'll
//                   be fully equipped and ready to secure your dream placement.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AfterEnrollingJourneyMob;

import React from "react";
import "./AfterEnrollingJourneyMob.css";

const steps = [
  {
    side: "left",
    title: "Start with Programming",
    body: "Begin your journey by learning the basics of programming, laying a strong foundation for all that follows.",
  },
  {
    side: "right",
    title: "Daily Live Coding Mastery",
    body: "Elevate your skills with interactive, daily live classes that turn you into a confident coder.",
  },
  {
    side: "left",
    title: "Dive into Hackathons",
    body: "Put your knowledge to the test in exciting hackathons, where you'll solve real challenges and learn to think on your feet.",
  },
  {
    side: "right",
    title: "Build Real-World Projects",
    body: "Once you conquer hackathons, you'll work on production-ready projects that mirror industry demands.",
  },
  {
    side: "left",
    title: "Exclusive Mock Interviews",
    body: "Clear these hurdles to qualify for our specialized in-house mock interviews, designed to refine your professional skills.",
  },
  {
    side: "right",
    title: "Get Placement Ready",
    body: "With every step successfully completed and no backlogs, you'll be fully equipped and ready to secure your dream placement.",
  },
];

export default function AfterEnrollingJourneyMob() {
  return (
    <section className="aejm-section" aria-labelledby="aejm-title">
      <div className="aejm-card">
        <header className="aejm-head">
          <h2
            id="aejm-title"
            className="aejm-title"
            data-scroll
            data-scroll-speed="2"
          >
            Your Learning <span>Journey</span> Begins Here
          </h2>
          <p className="aejm-sub" data-scroll data-scroll-speed="2">
            Your complete step-by-step roadmap to becoming a confident,
            job-ready developer—ready to thrive in the tech industry.
          </p>
        </header>

        <div className="aejm-timeline">
          <div className="aejm-line" aria-hidden="true" />
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`aejm-item ${
                item.side === "right" ? "right" : "left"
              }`}
            >
              <span className="aejm-dot" aria-hidden="true" />
              <div className="aejm-item-content">
                <h3 className="aejm-item-title">{item.title}</h3>
                <p className="aejm-item-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
