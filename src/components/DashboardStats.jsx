import React from "react";
import "./DashboardStats.css";
import { AnimatedGradient } from "../components/AnimatedGradient.jsx"; // adjust path if needed

export default function DashboardStats() {
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
      value: "6 LPA",
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
    <section className="ds-wrap">
      <div className="ds-bg">
        <AnimatedGradient
          colors={["#f6f2fe", "#e9f0ff", "#ede7ff"]}
          speed={0.06}
          blur="medium"
        />
      </div>
      <div className="ds-grid">
        <div className="upper-div">
          <article className="ds-card ds-card--xl ds-area-big1">
            <h3 className="ds-kicker">Outcomes</h3>
            <div className="ds-value">{stats.placement.value}</div>
            <div className="ds-label">{stats.placement.label}</div>
            <p className="ds-blurb">{stats.placement.blurb}</p>
          </article>

          <article className="ds-card ds-card--sm ds-area-small1">
            <h3 className="ds-kicker">Pipeline</h3>
            <div className="ds-value">{stats.interviews.value}</div>
            <div className="ds-label">{stats.interviews.label}</div>
            <p className="ds-blurb">{stats.interviews.blurb}</p>
          </article>
        </div>
        <div className="lower-div">
          <article className="ds-card ds-card--sm ds-area-small2">
            <h3 className="ds-kicker">Network</h3>
            <div className="ds-value">{stats.partners.value}</div>
            <div className="ds-label">{stats.partners.label}</div>
            <p className="ds-blurb">{stats.partners.blurb}</p>
          </article>
          <article className="ds-card ds-card--xl ds-area-big2">
            <h3 className="ds-kicker">Compensation</h3>
            <div className="ds-value">{stats.ctc.value}</div>
            <div className="ds-label">{stats.ctc.label}</div>
            <p className="ds-blurb">{stats.ctc.blurb}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
