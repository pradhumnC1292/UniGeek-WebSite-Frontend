import React from "react";
import "./BecomeMentorHeroSec.css";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdGroups2 } from "react-icons/md";
import Hero_img01 from "../assets/images/bm-hero.png";
import Hero_img02 from "../assets/images/bm-hero-02.png";
import BecomeMentorLeftHeading from "./BecomeMentorLeftHeading";

const BecomeMentorHeroSec = () => {
  return (
    <section className="bm-BecomeMentorHeroSec">
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
