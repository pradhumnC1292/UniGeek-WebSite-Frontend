import React from "react";
import line52 from "../assets/icons/line 52.png";
import "./HowToGetAdmission.css";

const HowToGetAdmission = () => {
  return (
    <section className="admission-container" data-scroll-section>
      <h2 className="admission-title" data-scroll data-scroll-speed="2">
        “How to get <span>Admission</span>”
      </h2>
      <p className="sub-heading" data-scroll data-scroll-speed="2">
        Your Pathway to an Exclusive, High-Quality Learning Experience
      </p>

      <img src={line52} alt="" className="dot-line" />
      <img src={line52} alt="" className="dot-line02" />
      <img src={line52} alt="" className="dot-line03" />
      <img src={line52} alt="" className="dot-line04" />
      <div className="card01">
        <div className="step-div">
          <h4>Step 01</h4>
        </div>
        <div className="heading">
          <div className="head">
            {" "}
            <h3>Our Focus on Quality</h3>
          </div>
        </div>
        <div className="pera">
          <p>
            We intentionally keep our batch size to just 50 students, ensuring
            each learner receives focused, personalized attention.
          </p>
        </div>
      </div>
      <div className="card02">
        <div className="step-div">
          <h4>Step 02</h4>
        </div>
        <div className="heading">
          <div className="head">
            <h3>Single Batch, High Impact</h3>
          </div>
        </div>
        <div className="pera">
          <p>
            Since only one batch is admitted at a time, you’ll benefit from a
            more intimate classroom environment and in-depth guidance.
          </p>
        </div>
      </div>
      <div className="card03">
        <div className="step-div">
          <h4>Step 03</h4>
        </div>
        <div className="heading">
          <div className="head">
            <h3>Pre-Admission Test Requirement</h3>
          </div>
        </div>
        <div className="pera">
          <p>
            To join our program, you must clear our Pre-Admission Test, designed
            to assess your readiness and ensure you can thrive in our advanced
            courses.
          </p>
        </div>
      </div>
      <div className="card04">
        <div className="step-div">
          <h4>Step 04</h4>
        </div>
        <div className="heading">
          <div className="head">
            <h3>What the Test Covers</h3>
          </div>
        </div>
        <div className="pera">
          <p>
            Basic coding concepts and logical thinking. Analytical and
            problem-solving questions.Simple arithmetic and numerical reasoning.
          </p>
        </div>
      </div>
      <div className="card05">
        <div className="step-div">
          <h4>Step 05</h4>
        </div>
        <div className="heading">
          <div className="head">
            <h3>Why a Test?</h3>
          </div>
        </div>
        <div className="pera">
          <p>
            By maintaining high admission standards, we ensure motivated
            students and deliver a quality hands-on learning experience for all
            participants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToGetAdmission;

// import React from "react";
// import line52 from "../assets/icons/line 52.png";
// import "./HowToGetAdmission.css";

// const HowToGetAdmission = () => {
//   return (
//     <section className="admission-container">
//       <h2 className="admission-title">How to get Admission</h2>
//     </section>
//   );
// };

// export default HowToGetAdmission;
