import React from "react";
import "./WhyDiffrent_Mob.css";

const timeline = [
  {
    side: "left",
    title: "Best Teachers",
    body: "Highly skilled mentors with real industry experience.",
  },
  {
    side: "right",
    title: "Best Curriculum",
    body: "Clear, structured, and future-ready learning paths.",
  },
  {
    side: "left",
    title: "1 to 1 Support",
    body: "Personalized, one-to-one doubt resolution.",
  },
  {
    side: "right",
    title: "5+ Courses",
    body: "Everything you need to learn, all in one place.",
  },
];

export default function WhyDiffrent_Mob() {
  return (
    <section className="wdm-section" aria-labelledby="wdm-title">
      <div className="wdm-card">
        <header className="wdm-head">
          <h2 id="wdm-title" className="wdm-title">
            “Why We Are <span>Different</span> from Others ?”
          </h2>
          <p className="wdm-sub">
            We have highly professional mentors and a learner-first system.
            Strong features, simple structure, and real outcomes.
          </p>
        </header>

        <div className="wdm-timeline">
          {/* center line */}
          <div className="wdm-line" aria-hidden="true" />
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`wdm-item ${item.side === "right" ? "right" : "left"}`}
            >
              {/* dot on the center line */}
              <span className="wdm-dot" aria-hidden="true" />
              <div className="wdm-item-content">
                <h3 className="wdm-item-title">{item.title}</h3>
                <p className="wdm-item-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
