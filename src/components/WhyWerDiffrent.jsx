import React from "react";
import "./WhyWerDiffrent.css";

const cards = [
  {
    id: "specialized",
    icon: "🎯",
    title: "Hyper-Specialized",
    body: "Not broad, generic coding courses. We focus on niche, high-demand roles like Cloud-Native Backend, Data Engineering for BFSI/Healthcare, and AI/ML Ops with GenAI tools.",
  },
  {
    id: "employer",
    icon: "🤝",
    title: "Employer-Backed",
    body: "Curriculum co-created with hiring partners. Every module aligns with real job descriptions and industry needs—making you job-ready from day one.",
  },
  {
    id: "ecosystem",
    icon: "🌐",
    title: "Career Ecosystem",
    body: "We go beyond placements. Alumni job board, paid micro-courses, peer projects, and hackathons build lifelong career growth.",
  },
  {
    id: "trust",
    icon: "✅",
    title: "Trust First",
    body: "No fake promises. We don’t sell placement guarantees—we provide real interview opportunities with top employers. With the right skills and our support, you’ll be confident to crack interviews and secure the job.",
  },
];

export default function WhyWerDiffrent() {
  return (
    <section className="wd-section" aria-labelledby="wd-title">
      <div className="wd-shell">
        <header className="wd-head">
          {/* <h2 id="wd-title" className="wd-title">
            Why We’re Different
          </h2> */}
          <p className="wd-sub">
            We’re not just another coding bootcamp. We’re India’s only
            employer-certified career accelerator for niche tech jobs—with
            transparent results and lifelong support.
          </p>
        </header>

        <ul className="wd-grid" role="list">
          {cards.map((c) => (
            <li key={c.id} className="wd-card">
              <span className="wd-icon" aria-hidden="true">
                {c.icon}
              </span>
              <h3 className="wd-card-title">{c.title}</h3>
              <p className="wd-card-body">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* background accents */}
      <div className="wd-blob wd-blob-a" aria-hidden="true" />
      <div className="wd-blob wd-blob-b" aria-hidden="true" />
    </section>
  );
}
