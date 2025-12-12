import React from "react";
import "./HireProcess.css";
import { FiFileText, FiUsers, FiMessageCircle, FiZap } from "react-icons/fi";
import { AnimatedGradient } from "../components/AnimatedGradient.jsx";

const HireProcess = () => {
  const steps = [
    {
      icon: <FiFileText />,
      title: "Submit Your Requirements",
      description:
        "Share your hiring needs, project goals, required skill set, and company details through our quick requirement form. This helps us understand the exact profile you're looking for and ensures a perfectly tailored search.",
    },
    {
      icon: <FiUsers />,
      title: "We Match & Shortlist",
      description:
        "Our recruitment team analyzes your requirements and identifies the most suitable candidates from our thoroughly vetted talent pool. Each profile is evaluated based on technical expertise, experience, communication, and cultural fit.",
    },
    {
      icon: <FiMessageCircle />,
      title: "Interview & Select",
      description:
        "Review curated candidate profiles, conduct interviews at your convenience, assign test tasks if needed, and select the best fit for your team. We ensure you only meet candidates who match your expectations.",
    },
    {
      icon: <FiZap />,
      title: "Onboard & Deploy",
      description:
        "Once selected, the developer can join immediately. We handle paperwork, onboarding support, and ensure a smooth transition so your team can start building without delays or operational friction.",
    },
  ];

  const areaClasses = [
    "ds-area-big1",
    "ds-area-small1",
    "ds-area-small2",
    "ds-area-big2",
  ];
  const cardSizes = [
    "ds-card--xl",
    "ds-card--sm",
    "ds-card--sm",
    "ds-card--xl",
  ];

  return (
    <section className="ds-wrap" data-scroll-section>
      <div className="ds-bg">
        <AnimatedGradient
          colors={["#f6f2fe", "#e9f0ff", "#ede7ff"]}
          speed={0.06}
          blur="medium"
        />
      </div>
      <div className="ds-grid">
        <div className="ds-header">
          <h2 className="ds-title">
            Our <span>Hiring Process</span>
          </h2>
          <p className="ds-subtitle">
            Simple, fast, and efficient — from requirement to deployment in just
            a few steps.
          </p>
        </div>
        <div className="upper-div">
          <article className={`ds-card ${cardSizes[0]} ${areaClasses[0]}`}>
            <h3 className="ds-kicker">
              <span className="ds-kicker-icon">{steps[0].icon}</span>
              Step 01
            </h3>
            <div className="ds-label">{steps[0].title}</div>
            <p className="ds-blurb">{steps[0].description}</p>
          </article>

          <article className={`ds-card ${cardSizes[1]} ${areaClasses[1]}`}>
            <h3 className="ds-kicker">
              <span className="ds-kicker-icon">{steps[1].icon}</span>
              Step 02
            </h3>
            <div className="ds-label">{steps[1].title}</div>
            <p className="ds-blurb">{steps[1].description}</p>
          </article>
        </div>
        <div className="lower-div">
          <article className={`ds-card ${cardSizes[2]} ${areaClasses[2]}`}>
            <h3 className="ds-kicker">
              <span className="ds-kicker-icon">{steps[2].icon}</span>
              Step 03
            </h3>
            <div className="ds-label">{steps[2].title}</div>
            <p className="ds-blurb">{steps[2].description}</p>
          </article>
          <article className={`ds-card ${cardSizes[3]} ${areaClasses[3]}`}>
            <h3 className="ds-kicker">
              <span className="ds-kicker-icon">{steps[3].icon}</span>
              Step 04
            </h3>
            <div className="ds-label">{steps[3].title}</div>
            <p className="ds-blurb">{steps[3].description}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HireProcess;
