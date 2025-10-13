import React, { useState, useEffect } from "react";
import "./BecomeMentorHeroSec.css";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdGroups2 } from "react-icons/md";
import Hero_img01 from "../assets/images/bm-hero.png";
import Hero_img02 from "../assets/images/bm-hero-02.png";
import BecomeMentorLeftHeading from "./BecomeMentorLeftHeading";
import { AnimatedGridPattern } from "./AnimatedGridPattern";

const BecomeMentorHeroSec = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bm-BecomeMentorHeroSec">
      {/* Animated Grid Pattern Background */}
      <div className="hero-grid-pattern">
        <AnimatedGridPattern
          numSquares={isMobile ? 20 : 40}
          maxOpacity={isMobile ? 0.6 : 0.5}
          duration={isMobile ? 4 : 3}
          repeatDelay={isMobile ? 2 : 1}
          width={isMobile ? 50 : 50}
          height={isMobile ? 50 : 50}
        />
      </div>
      <div className="bm-BecomeMentor-left-div">
        <BecomeMentorLeftHeading />
      </div>

      <div className="bm-BecomeMentor-right-div">
        <div className="bm-right-image-container">
          <div className="bm-right-image-left-div">
            <div className="bm-right-img-left-upper">
              <img src={Hero_img01} alt="" className="bm-BecomeMentor-imgs" />
            </div>
            <div className="bm-right-img-left-lower">
              <div className="bm-right-img-left-lower-icon">
                <HiOutlineVideoCamera />
              </div>
              <div className="bm-right-img-left-lower-title">
                <h2>LIVE</h2>
                <h4>Lessons</h4>
              </div>
            </div>
            {/* <div className="bm-badge">✨</div> */}
          </div>
          <div className="bm-right-image-right-div">
            <div className="bm-right-img-right-upper">
              <div className="bm-right-img-right-upper-icon">
                <MdGroups2 />
              </div>
              <div className="bm-right-img-right-upper-title">
                <h2>BEST</h2>
                <h4>mentors</h4>
              </div>
            </div>
            <div className="bm-right-img-right-lower">
              <img src={Hero_img02} alt="" className="bm-BecomeMentor-imgs" />
            </div>
            {/* <div className="bm-badge02">✨</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentorHeroSec;
