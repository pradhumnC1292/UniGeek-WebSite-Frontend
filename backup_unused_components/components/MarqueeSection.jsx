import React from "react";
import "./marqueesection.css";

export function MarqueeDemo() {
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

  return (
    <div className="marquee-section">
      {/* Heading Section */}
      <div className="marquee-header">
        <h2 className="marquee-heading">
          “Trusted by Learners, <span>Recognized</span> by Industries”
        </h2>
        <p className="marquee-subheading">
          Helping students gain real skills and connect with top startups and
          tech companies.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="marquee-container">
        {/* Top Row - Scrolls Right to Left */}
        <div className="marquee-row">
          <div className="marquee-track marquee-track-left">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos].map(
              (logo, index) => (
                <div className="marquee-card" key={`top-${index}`}>
                  <div className="logo-wrapper">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="company-logo"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Row - Scrolls Left to Right */}
        <div className="marquee-row">
          <div className="marquee-track marquee-track-right">
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map(
              (logo, index) => (
                <div className="marquee-card" key={`bottom-${index}`}>
                  <div className="logo-wrapper">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="company-logo"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
