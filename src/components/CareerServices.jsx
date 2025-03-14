import React from "react";
import "./CareerServices.css";
import resume from "../assets/icons/resume.png";
import mock_inter from "../assets/icons/mock_inter.png";
import linkedin_profile from "../assets/icons/linkedin_profile.png";
import company_assign from "../assets/icons/company_assign.png";
import referrals from "../assets/icons/referrals.png";
import line from "../assets/icons/Line.png";

const CareerServices = () => {
  return (
    <section className="career-services-section" data-scroll-section>
      <h4 className="student-unique">Every Student is Unique</h4>
      <h2 className="career-services-title">“Career Services”</h2>
      <p className="career-services-subtitle">
        Our career services include personalized guidance to help you land your
        dream job.
      </p>
      <div className="services-container" data-scroll data-scroll-speed="2">
        {/* <img src={line} alt="Connector Line" className="line-connector" /> */}
        <div className="service-item">
          <div className="service-icon-div">
            <img
              src={resume}
              alt="Resume Icon"
              className="service-icon"
              id="resume-icon"
            />
          </div>
          <div className="service-heading">
            <h3>Resume Building</h3>
          </div>
          <div className="service-pera">
            <p>
              "Perfect your resume and nail your skills pitch for every
              interview."
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon-div">
            <img
              src={mock_inter}
              alt="Mock Interviews Icon"
              className="service-icon"
            />
          </div>
          <div className="service-heading">
            <h3>Mock Interviews</h3>
          </div>
          <div className="service-pera">
            <p>
              "Experience real-world interview scenarios and gain confidence."
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon-div">
            <img
              src={linkedin_profile}
              alt="LinkedIn Icon"
              className="service-icon"
            />
          </div>
          <div className="service-heading">
            <h3>LinkedIn Profiles</h3>
          </div>
          <div className="service-pera">
            <p>
              "Enhance your professional brand and attract the right
              opportunities."
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon-div">
            <img
              src={company_assign}
              alt="Company Assignments Icon"
              className="service-icon"
            />
          </div>
          <div className="service-heading">
            <h3>Company Assignments</h3>
          </div>
          <div className="service-pera">
            <p>"Gain real-world experience with hands-on company tasks."</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon-div">
            <img
              src={referrals}
              alt="Referrals Icon"
              className="service-icon"
            />
          </div>
          <div className="service-heading">
            <h3>Referrals to Top Companies</h3>
          </div>
          <div className="service-pera">
            <p>
              "Unlock exclusive chances at renowned employers through our
              network."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerServices;
