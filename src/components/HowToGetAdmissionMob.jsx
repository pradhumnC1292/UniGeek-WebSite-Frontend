import React from "react";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";

const HowToGetAdmissionMob = () => {
  return (
    <section className="HowToGetAdmissionMob">
      <BackgroundBeamsWithCollision>
        <div className="title-div">
          <h2 className="admission-title-mob" data-scroll data-scroll-speed="2">
            “How to get <span>Admission</span>”
          </h2>
          <p className="sub-heading-mob" data-scroll data-scroll-speed="2">
            Your Pathway to an Exclusive, High-Quality Learning Experience
          </p>
        </div>
        <div className="lower-div">
          <div className="card">
            <div className="left-div">
              <h3 className="card-title-01">Our Focus on Quality</h3>
              <p className="card-pera">
                We intentionally keep our batch size to just 50 students,
                ensuring each learner receives focused, personalized attention.
              </p>
            </div>
            <div className="right-div">
              <h1 className="card-number">01</h1>
            </div>
          </div>
          <div className="card-02">
            <div className="left-div-02">
              <h1 className="card-number-02">02</h1>
            </div>
            <div className="right-div-02">
              <h3 className="card-title-02">Single Batch, High Impact</h3>
              <p className="card-pera-02">
                Since only one batch is admitted at a time, you’ll benefit from
                a more intimate classroom environment and in-depth guidance.
              </p>
            </div>
          </div>
          <div className="card-03">
            <div className="left-div-03">
              <h3 className="card-title-03">Pre-Admission Test Requirement</h3>
              <p className="card-pera-03">
                Admission is earned. Clear the Pre-Admission Test and personal
                interview to begin your journey with us.
              </p>
            </div>
            <div className="right-div-03">
              <h1 className="card-number-03">03</h1>
            </div>
          </div>
          <div className="card-04">
            <div className="left-div-04">
              <h1 className="card-number-04">04</h1>
            </div>
            <div className="right-div-04">
              <h3 className="card-title-04">What the Test Covers</h3>
              <p className="card-pera-04">
                Basic coding concepts and logical thinking. Analytical and
                problem-solving questions. Simple arithmetic and numerical
                reasoning.
              </p>
            </div>
          </div>
          <div className="card-05">
            <div className="left-div-05">
              <h3 className="card-title-05">Why a Test?</h3>
              <p className="card-pera-05">
                By maintaining high admission standards, we ensure motivated
                students and deliver a quality hands-on learning experience for
                all participants.
              </p>
            </div>
            <div className="right-div-05">
              <h1 className="card-number-05">05</h1>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default HowToGetAdmissionMob;
