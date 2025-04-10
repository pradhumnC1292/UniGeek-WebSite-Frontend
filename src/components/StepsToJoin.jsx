import React from "react";
import {
  FaPenFancy,
  FaUserCheck,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";
import "./StepsToJoin.css";

const StepsToJoin = () => {
  return (
    <section className="steps-join-container">
      <div className="steps-join-content">
        <h2 className="steps-join-heading">
          How you can join us?
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h2>
        <p className="steps-join-subheading">
          Follow these four simple steps to begin your mentoring journey with
          us.
        </p>

        <div className="steps-join-features">
          {/* Step 1 */}
          <div className="steps-card">
            <h3 className="steps-card-title">
              <FaPenFancy className="steps-icon" />
              Submit Application
            </h3>
            <p className="steps-card-description">
              Kick things off by completing a quick and easy online application
              form.
            </p>
          </div>

          {/* Step 2 */}
          <div className="steps-card">
            <h3 className="steps-card-title">
              <FaUserCheck className="steps-icon" />
              Profile Review
            </h3>
            <p className="steps-card-description">
              Our team will carefully evaluate your application and shortlist
              qualified candidates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="steps-card">
            <h3 className="steps-card-title">
              <FaChalkboardTeacher className="steps-icon" />
              Attend an Interview
            </h3>
            <p className="steps-card-description">
              If shortlisted, you'll be invited to an interview to assess your
              expertise and fit.
            </p>
          </div>

          {/* Step 4 */}
          <div className="steps-card">
            <h3 className="steps-card-title">
              <FaRocket className="steps-icon" />
              Begin Mentoring
            </h3>
            <p className="steps-card-description">
              Successfully clear the interview and start making an impact as a
              mentor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToJoin;
