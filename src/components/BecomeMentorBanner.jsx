import React from "react";
import img01 from "../assets/images/bm-img01.png";
import img02 from "../assets/images/bm-img02.png";
import img03 from "../assets/images/bm-img03.png";
import "./BecomeMentorBanner.css";

import {
  DollarSign,
  Handshake,
  Compass,
  Globe2,
  Lightbulb,
} from "lucide-react";

const BecomeMentorBanner = () => {
  return (
    <section className="become-mentor-banner-sec">
      <div className="become-mentor-banner-content">
        {/* Left Side Image Grid */}
        <div className="content-left-div">
          <div className="img-grid-div">
            <div className="left-img-upper-div">
              <img src={img01} alt="" className="bm-banner-img" />
            </div>
            <div className="left-img-lower-div">
              <div className="left-lower-left-div">
                <img src={img02} alt="" className="bm-banner-img" />
              </div>
              <div className="left-lower-right-div">
                <img src={img03} alt="" className="bm-banner-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Text / Info Section */}
        <div className="content-right-div">
          <div className="become-mentor-banner-title">
            <h2>
              Uncover the Limitless Benefits of <span>Becoming</span> a Mentor
            </h2>
            <p>
              Sharing your knowledge is more than just teaching — it sharpens
              your leadership, boosts communication skills, and offers new
              perspectives that enrich your own growth.
            </p>
          </div>

          <div className="right-info-container">
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              </div>
              <div className="info-text">
                <h4>Earn Extra Income</h4>
                <p>
                  Get rewarded for your time and expertise with a reliable
                  secondary income stream.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </div>
              <div className="info-text">
                <h4>Gain Respect & Appreciation</h4>
                <p>
                  Experience the personal satisfaction of being recognized and
                  appreciated by learners.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <div className="info-text">
                <h4>Inspire the Next Generation</h4>
                <p>
                  Play a vital role in guiding ambitious learners toward their
                  career goals.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                </svg>
              </div>
              <div className="info-text">
                <h4>Grow Your Professional Network</h4>
                <p>
                  Connect with a diverse community of students, mentors, and
                  industry professionals.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <div className="info-text">
                <h4>Deepen Your Understanding</h4>
                <p>
                  Strengthen your own knowledge and learn continuously by
                  teaching others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentorBanner;
