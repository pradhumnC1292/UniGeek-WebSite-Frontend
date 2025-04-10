import React from "react";
import "./AfterEnrollingJourneyMob.css";

const UiUxAfterEnrollingJourneyMob = () => {
  return (
    <section className="aej-sec" id="education">
      <h2 className="mobile-heading" data-scroll data-scroll-speed="2">
        Your Learning <span>Journey</span> Begins Here
      </h2>
      <p className="mobile-subheading" data-scroll data-scroll-speed="2">
        Your Complete Step-by-Step Roadmap to Becoming a Confident, Job-Ready
        Developer Ready to Thrive in the Tech Industry
      </p>

      <div className="aej__container container">
        <div className="aej__tabs">
          <div className="aej__button aej__active button--flex"></div>
        </div>

        <div className="aej__section">
          <div className="aej__content ">
            <div className="aej__data">
              <div>
                <h3 className="aej__title">Start with Programm</h3>
                <span className="aej__subtitle">
                  Begin your journey by learning the basics of designing, laying
                  a strong foundation for all that follows
                </span>
              </div>
              <div>
                <span className="aej__rounder"></span>
                <span className="aej__line"></span>
              </div>
            </div>

            <div className="aej__data">
              <div></div>
              <div>
                <span className="aej__rounder"></span>
                <span className="aej__line"></span>
              </div>
              <div>
                <h3 className="aej__title">Daily Live Classes</h3>
                <span className="aej__subtitle">
                  Elevate your skills with interactive, daily live classes that
                  turn you into a confident Designer.
                </span>
              </div>
            </div>

            <div className="aej__data">
              <div>
                <h3 className="aej__title">Dive into Contests</h3>
                <span className="aej__subtitle">
                  Put your knowledge to the test in exciting Contests, where
                  you'll solve real challenges and learn to think on your feet.
                </span>
              </div>
              <div>
                <span className="aej__rounder"></span>
                <span className="aej__line"></span>
              </div>
            </div>

            <div className="aej__data">
              <div></div>
              <div>
                <span className="aej__rounder"></span>
                <span className="aej__line"></span>
              </div>
              <div>
                <h3 className="aej__title">Build Real-World Designs</h3>
                <span className="aej__subtitle">
                  Once you conquer Contests, you'll work on production-ready
                  projects that mirror industry demands.
                </span>
              </div>
            </div>

            <div className="aej__data">
              <div>
                <h3 className="aej__title">Exclusive Mock Interviews</h3>
                <span className="aej__subtitle">
                  Clear these hurdles to qualify for our specialized in-house
                  mock interviews, designed to refine your professional skills.
                </span>
              </div>
              <div>
                <span className="aej__rounder"></span>
                <span className="aej__line"></span>
              </div>
            </div>

            <div className="aej__data">
              <div></div>
              <div>
                <span className="aej__rounder"></span>
                <span className="aej__line"></span>
              </div>
              <div>
                <h3 className="aej__title">Get Placement Ready</h3>
                <span className="aej__subtitle">
                  With every step successfully completed and no backlogs, you'll
                  be fully equipped and ready to secure your dream placement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxAfterEnrollingJourneyMob;
