import React from "react";
import feature from "../assets/images/features.png";
import vc from "../assets/images/videocall.jpg";
import green from "../assets/icons/green.png";
import red from "../assets/icons/red.png";
import yellow from "../assets/icons/yellow.png";
import "./WhyDifferentMob02.css";

// Replace these with your actual image imports or paths
import meeting from "../assets/images/meeting.jpg";
// import privateDiscussion from "../assets/images/private-discussion.png";

const WhyDifferentMob02 = () => {
  return (
    <section className="why-different-02-mob" data-scroll-section>
      <div className="grid-container-mob">
        <div className="left-section-mob">
          <div className="left-upper-mob">
            <h2>One-on-One Discussions</h2>
            <p>
              Teachers and TAs can seamlessly hold private, one‑on‑one
              discussions with students right within Zoom—no extra steps
              required.
            </p>
          </div>
          <div className="left-lower-mob">
            <img src={feature} alt="" className="ll-img-mob" />
          </div>
        </div>
        <div className="right-section-mob">
          <div className="right-upper-mob">
            <div className="right-upper-lower-mob">
              <img src={vc} alt="" className="vc-img-mob" />
            </div>
          </div>
          <div className="right-lower-mob">
            <div className="right-lower-title-mob">
              <h2>
                Our platform's key & best <span>features</span>
              </h2>
              <p>
                We focus on hands-on, real-world practice over dry theory—learn
                by doing, not just reading!
              </p>
            </div>
            <div className="right-lower-div-mob">
              <div className="feature-mob">
                <div className="icon-mob">
                  <img src={green} alt="" className="icon-img-mob" />
                </div>
                <div className="feature-title-mob">
                  <p>
                    We have the best support. We give 1 to 1 support to our
                    students.
                  </p>
                </div>
              </div>
              <div className="feature-mob">
                <div className="icon-mob02">
                  <img src={yellow} alt="" className="icon-img-mob" />
                </div>
                <div className="feature-title-mob">
                  <p>
                    Get premium courses at unbeatable prices - upgrade your
                    skills without breaking the bank!
                  </p>
                </div>
              </div>
              <div className="feature-mob">
                <div className="icon-mob03">
                  <img src={red} alt="" className="icon-img-mob" />
                </div>
                <div className="feature-title-mob">
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

export default WhyDifferentMob02;
