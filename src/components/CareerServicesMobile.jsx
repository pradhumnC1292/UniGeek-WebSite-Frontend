import React from "react";
import resumeIcon from "../assets/icons/resume.png";
import mockIcon from "../assets/icons/mock_inter.png";
import linkedInIcon from "../assets/icons/linkedin_profile.png";
import companyIcon from "../assets/icons/company_assign.png";
import referralsIcon from "../assets/icons/referrals.png";
import "./CareerServices.css";

const items = [
  {
    icon: resumeIcon,
    alt: "Resume Building",
    title: "Resume Building",
    text: "Polish your resume and pitch your skills with clarity.",
  },
  {
    icon: mockIcon,
    alt: "Mock Interviews",
    title: "Mock Interviews",
    text: "Practice real interview rounds and build confidence.",
  },
  {
    icon: linkedInIcon,
    alt: "LinkedIn Profiles",
    title: "LinkedIn Profiles",
    text: "Stand out with a sharp profile and recruiter-ready presence.",
  },
  {
    icon: companyIcon,
    alt: "Company Assignments",
    title: "Company Assignments",
    text: "Work on tasks that mirror real company challenges.",
  },
  {
    icon: referralsIcon,
    alt: "Referrals",
    title: "Referrals",
    text: "Access opportunities via our trusted hiring network.",
  },
];

export default function CareerServicesMobile() {
  return (
    <section className="cs-mobile">
      <div className="cs-head">
        <span className="cs-pill">Every Student is Unique</span>
        <h2 className="cs-title">Career Services</h2>
        <p className="cs-sub">
          Get personalized guidance to land the job you want.
        </p>
      </div>

      <div className="cs-rail" aria-label="Career services carousel">
        <div className="cs-track">
          {items.map((it) => (
            <article className="cs-card" key={it.title}>
              <div className="cs-icon">
                <img src={it.icon} alt={it.alt} loading="lazy" />
              </div>
              <div className="cs-body">
                <h3 className="cs-card-title">{it.title}</h3>
                <p className="cs-card-text">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="cs-hint">Swipe to explore</div>
    </section>
  );
}
