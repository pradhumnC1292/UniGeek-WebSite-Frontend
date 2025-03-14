import React from "react";
import resumeIcon from "../assets/icons/resume.png";
import mockIcon from "../assets/icons/mock_inter.png";
import linkedInIcon from "../assets/icons/linkedin_profile.png";
import companyIcon from "../assets/icons/company_assign.png";
import referralsIcon from "../assets/icons/referrals.png";
import "./CourseSection.css";

const CareerServicesMobile = () => {
  return (
    <section className="cs-mobile-section">
      <h4 className="cs-mobile-pre-title">Every Student is Unique</h4>
      <h2 className="cs-mobile-title">“Career Services”</h2>
      <p className="cs-mobile-subtitle">
        Our career services provide personalized guidance to help you land your
        dream job.
      </p>
      <div className="cs-mobile-container">
        <div className="cs-mobile-cards">
          <div className="cs-card">
            <div className="cs-card-icon">
              <img src={resumeIcon} alt="Resume Building" />
            </div>
            <div className="cs-card-info">
              <h3 className="cs-card-title">Resume Building</h3>
              <p className="cs-card-text">
                Perfect your resume and nail your skills pitch for every
                interview.
              </p>
            </div>
          </div>
          <div className="cs-card">
            <div className="cs-card-icon">
              <img src={mockIcon} alt="Mock Interviews" />
            </div>
            <div className="cs-card-info">
              <h3 className="cs-card-title">Mock Interviews</h3>
              <p className="cs-card-text">
                Experience real-world interview scenarios and gain confidence.
              </p>
            </div>
          </div>
          <div className="cs-card">
            <div className="cs-card-icon">
              <img src={linkedInIcon} alt="LinkedIn Profiles" />
            </div>
            <div className="cs-card-info">
              <h3 className="cs-card-title">LinkedIn Profiles</h3>
              <p className="cs-card-text">
                Enhance your professional brand and attract the right
                opportunities.
              </p>
            </div>
          </div>
          <div className="cs-card">
            <div className="cs-card-icon">
              <img src={companyIcon} alt="Company Assignments" />
            </div>
            <div className="cs-card-info">
              <h3 className="cs-card-title">Company Assignments</h3>
              <p className="cs-card-text">
                Gain real-world experience with hands-on company tasks.
              </p>
            </div>
          </div>
          <div className="cs-card">
            <div className="cs-card-icon">
              <img src={referralsIcon} alt="Referrals" />
            </div>
            <div className="cs-card-info">
              <h3 className="cs-card-title">Referrals</h3>
              <p className="cs-card-text">
                Unlock exclusive chances at renowned employers through our
                network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerServicesMobile;
