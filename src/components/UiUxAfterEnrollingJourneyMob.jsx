import React from "react";
import "./AfterEnrollingJourneyMob.css";

const steps = [
  {
    side: "left",
    title: "Start with Design Foundations",
    body: "Begin with core UI/UX principles—visual hierarchy, color, typography, grids, and accessibility—to build a rock-solid base.",
  },
  {
    side: "right",
    title: "Daily Live Design Workshops",
    body: "Join interactive, hands-on sessions covering Figma fluency, wireframing, component systems, and prototyping best practices.",
  },
  {
    side: "left",
    title: "Challenges & Portfolio Sprints",
    body: "Tackle weekly challenges (landing pages, dashboards, mobile flows) to sharpen craft and build portfolio-ready artifacts.",
  },
  {
    side: "right",
    title: "Real-World UI/UX Projects",
    body: "Ship end-to-end case studies—from research and user flows to hi-fi prototypes and handoff—mirroring industry workflows.",
  },
  {
    side: "left",
    title: "User Testing & Case Study Writing",
    body: "Validate designs with usability tests and convert results into clear, outcome-driven case studies that recruiters love.",
  },
  {
    side: "right",
    title: "Mock Interviews & Placement Readiness",
    body: "Polish your portfolio, refine your storytelling, and practice product-thinking interviews to become job-ready.",
  },
];

export default function UiUxAfterEnrollingJourneyMob() {
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
            job-ready UI/UX designer—ready to thrive in product teams.
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
