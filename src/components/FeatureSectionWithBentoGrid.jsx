import React from "react";
import "./FeatureSectionWithBentoGrid.css";

function Badge({ text }) {
  return <span className="badge">{text}</span>;
}

function FeatureCard({ value, label, blurb, className = "" }) {
  return (
    <div className={`feature-card ${className}`}>
      <div className="feature-content">
        <div className="feature-value">{value}</div>
        <h3>{label}</h3>
        <p>{blurb}</p>
      </div>
    </div>
  );
}

export default function FeatureSectionWithBentoGrid() {
  const stats = {
    placement: {
      value: "87%",
      label: "Placement Success Rate",
      blurb: "Consistent job outcomes across top tech roles.",
    },
    interviews: {
      value: "99%",
      label: "Interview Calls Secured",
      blurb: "Most learners receive multiple interview opportunities.",
    },
    ctc: {
      value: "5 LPA",
      label: "Average CTC",
      blurb: "Competitive salary packages across companies and roles.",
    },
    partners: {
      value: "100+",
      label: "Hiring Partners",
      blurb: "Trusted startups and enterprises recruit directly from us.",
    },
  };

  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <Badge text="Platform" />

          <h2>
            Real Outcomes. Real <span>Growth</span>.
          </h2>
          <p>
            Proven results that show how our platform transforms learning into
            careers.
          </p>
        </div>

        <div className="feature-grid">
          <FeatureCard
            value={stats.placement.value}
            label={stats.placement.label}
            blurb={stats.placement.blurb}
            className="feature-card--wide feature-area-big1"
          />

          <FeatureCard
            value={stats.interviews.value}
            label={stats.interviews.label}
            blurb={stats.interviews.blurb}
            className="feature-area-small1"
          />

          <FeatureCard
            value={stats.partners.value}
            label={stats.partners.label}
            blurb={stats.partners.blurb}
            className="feature-area-small2"
          />

          <FeatureCard
            value={stats.ctc.value}
            label={stats.ctc.label}
            blurb={stats.ctc.blurb}
            className="feature-card--wide feature-area-big2"
          />
        </div>
      </div>
    </section>
  );
}
