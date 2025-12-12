import React from "react";
import "./IndustriesPartners.css";

// Company logos from original MarqueeSection
const topRowLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    alt: "Samsung",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
  },
];

const bottomRowLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adobe_Corporate_logo.svg",
    alt: "Adobe",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    alt: "Microsoft",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    alt: "Meta",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Wipro_Primary_Logo_Color_RGB.svg",
    alt: "Wipro",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    alt: "Infosys",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    alt: "TCS",
  },
];

// Utility to repeat icons enough times for seamless scrolling
const repeatedIcons = (icons, repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IndustriesPartners() {
  return (
    <section className="industries-partners">
      {/* Light grid background */}
      <div className="industries-partners__grid-bg" />

      {/* Content */}
      <div className="industries-partners__content">
        {/* Heading Section from original MarqueeSection */}
        <div className="industries-partners__header">
          <h2 className="industries-partners__heading">
            "Trusted by Learners, <span>Recognized</span> by Industries"
          </h2>
          <p className="industries-partners__subheading">
            Helping students gain real skills and connect with top startups and
            tech companies.
          </p>
        </div>

        {/* Carousel */}
        <div className="industries-partners__carousel">
          {/* Row 1 - Scrolls Right to Left */}
          <div className="industries-partners__row industries-partners__row--scroll-left">
            {repeatedIcons(topRowLogos, 4).map((logo, i) => (
              <div
                key={`row1-${i}`}
                className="industries-partners__icon-wrapper"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="industries-partners__icon"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Scrolls Left to Right */}
          <div className="industries-partners__row industries-partners__row--scroll-right">
            {repeatedIcons(bottomRowLogos, 4).map((logo, i) => (
              <div
                key={`row2-${i}`}
                className="industries-partners__icon-wrapper"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="industries-partners__icon"
                />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="industries-partners__fade industries-partners__fade--left" />
          <div className="industries-partners__fade industries-partners__fade--right" />
        </div>
      </div>
    </section>
  );
}
