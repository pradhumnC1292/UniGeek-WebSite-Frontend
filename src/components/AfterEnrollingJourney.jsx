import React from "react";
import "./AfterEnrollingJourney.css";
const AfterEnrollingJourney = () => {
  return (
    <section className="AEJ-section">
      <div className="titile-div">
        <h2>
          Your Learning <span>Journey</span> Begins Here
        </h2>
        <p>
          Your Complete Step-by-Step Roadmap to Becoming a Confident, Job-Ready
          Developer Ready to Thrive in the Tech Industry
        </p>
      </div>
      <div className="AEJ-grid-section">
        <div id="cssportal-grid">
          <div id="div1">
            <div className="AEJ-step-div">01</div>
            <div className="card-title-div">
              <div className="title-div-01">
                <h3>Kickstart </h3>
              </div>
              <div className="title-div-02">
                <h3>with </h3>
              </div>
              <div className="title-div-03">
                <h3>Programming</h3>
              </div>
              <p>
                Begin your journey by learning the basics of programming, laying
                a strong foundation for all that follows
              </p>
            </div>
          </div>
          <div id="div2">
            <div className="AEJ-step-div">02</div>
            <div className="card-title-div">
              {" "}
              <div className="title-div-01">
                <h3>Daily </h3>
              </div>
              <div className="title-div-02">
                <h3>Live Coding </h3>
              </div>
              <div className="title-div-03">
                <h3>Mastery</h3>
              </div>
              <p>
                Elevate your skills with interactive, daily live classes that
                turn you into a confident coder.
              </p>
            </div>
          </div>
          <div id="div3">
            <div className="AEJ-step-div">03</div>
            <div className="card-title-div">
              <div className="title-div-01">
                <h3>Dive </h3>
              </div>
              <div className="title-div-02">
                <h3>into </h3>
              </div>
              <div className="title-div-03">
                <h3>Hackathons</h3>
              </div>
              <p>
                Put your knowledge to the test in exciting hackathons, where
                you'll solve real challenges and learn to think on your feet.
              </p>
            </div>
          </div>
          <div id="div4">
            <div className="AEJ-step-div">04</div>
            <div className="card-title-div">
              <div className="title-div-01">
                <h3>Build </h3>
              </div>
              <div className="title-div-02">
                <h3>Real-World</h3>
              </div>
              <div className="title-div-03">
                <h3>Projects</h3>
              </div>
              <p>
                Once you conquer hackathons, you'll work on production-ready
                projects that mirror industry demands.
              </p>
            </div>
          </div>
          <div id="div5">
            <div className="AEJ-step-div">05</div>
            <div className="card-title-div">
              <div className="title-div-01">
                <h3>Exclusive</h3>
              </div>
              <div className="title-div-02">
                <h3>Mock</h3>
              </div>
              <div className="title-div-03">
                <h3>Interviews</h3>
              </div>
              <p>
                Clear these hurdles to qualify for our specialized in-house mock
                interviews, designed to refine your professional skills.
              </p>
            </div>
          </div>
          <div id="div6">
            <div className="AEJ-step-div">06</div>
            <div className="card-title-div">
              <div className="title-div-01">
                <h3>Get </h3>
              </div>
              <div className="title-div-02">
                <h3>Placement</h3>
              </div>
              <div className="title-div-03">
                <h3>Ready</h3>
              </div>
              <p>
                With every step successfully completed and no backlogs, you'll
                be fully equipped and ready to secure your dream placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterEnrollingJourney;
