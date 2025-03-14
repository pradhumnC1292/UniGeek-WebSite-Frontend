import React from "react";
import feature from "../assets/images/features.png";
import vc from "../assets/images/videocall.jpg";
import green from "../assets/icons/green.png";
import red from "../assets/icons/red.png";
import yellow from "../assets/icons/yellow.png";
import "./WhyDifferent02.css";

// Replace these with your actual image imports or paths
import meeting from "../assets/images/meeting.jpg";
// import privateDiscussion from "../assets/images/private-discussion.png";

const WhyDifferent02 = () => {
  return (
    <section className="why-different-02" data-scroll-section>
      <div className="grid-container">
        <div className="left-section">
          <div className="left-upper">
            <h2>One-on-One Discussions</h2>
            <p>
              Teachers and TAs can seamlessly hold private, one‑on‑one
              discussions with students right within Zoom—no extra steps
              required.”
            </p>
          </div>
          <div className="left-lower">
            <img src={feature} alt="" className="ll-img" />
          </div>
        </div>
        <div className="right-section">
          <div className="right-upper">
            <p>
              We focus on hands-on, real-world practice over dry theory learn by
              doing, not just reading!
            </p>
            <div className="right-upper-lower">
              <img src={vc} alt="" className="vc-img" />
            </div>
          </div>
          <div className="right-lower">
            <div className="right-lower-title">
              <h2>
                Our platform's key & best <span>features</span>
              </h2>
            </div>
            <div className="right-lower-div">
              <div className="feature">
                <div className="icon">
                  <img src={green} alt="" className="icon-img" />
                </div>
                <div className="feature-title">
                  <p>
                    We have the best support. We give 1 to 1 support to our
                    students.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <img src={yellow} alt="" className="icon-img" />
                </div>
                <div className="feature-title">
                  {" "}
                  <p>
                    Get premium courses at unbeatable prices - updrade your
                    skills without breaking the bank!
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <img src={red} alt="" className="icon-img" />
                </div>
                <div className="feature-title">
                  <p>
                    We have the best & skilled mentors around the globe. Our
                    mentors are highly supportive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent02;
