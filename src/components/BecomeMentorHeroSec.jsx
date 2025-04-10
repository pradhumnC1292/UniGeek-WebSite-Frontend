import React from "react";
import "./BecomeMentorHeroSec.css";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdGroups2 } from "react-icons/md";
import Hero_img01 from "../assets/images/bm-hero.png";
import Hero_img02 from "../assets/images/bm-hero-02.png";
import BecomeMentorLeftHeading from "./BecomeMentorLeftHeading";

const BecomeMentorHeroSec = () => {
  return (
    <section className="BecomeMentorHeroSec">
      <div className="BecomeMentor-left-div">
        <BecomeMentorLeftHeading />
      </div>
      <div className="BecomeMentor-right-div">
        <div className="right-image-container">
          <div className="right-image-left-div">
            <div className="right-img-left-upper">
              <img src={Hero_img01} alt="" className="BecomeMentor-imgs" />
            </div>
            <div className="right-img-left-lower">
              <div className="right-img-left-lower-icon">
                <HiOutlineVideoCamera />
              </div>
              <div className="right-img-left-lower-title">
                <h2>VIDEO</h2>
                <h4>Lessons</h4>
              </div>
            </div>

            <div className="badge">✨</div>
          </div>
          <div className="right-image-right-div">
            <div className="right-img-right-upper">
              <div className="right-img-left-upper-icon">
                <MdGroups2 />
              </div>
              <div className="right-img-left-upper-title">
                <h2>BEST</h2>
                <h4>mentors</h4>
              </div>
            </div>
            <div className="right-img-right-lower">
              <img src={Hero_img02} alt="" className="BecomeMentor-imgs" />
            </div>
            <div className="badge02">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentorHeroSec;
