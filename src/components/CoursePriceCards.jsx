import React from "react";
import "./CoursePriceCards.css";

const CoursePriceCards = ({ data }) => {
  const handleEnrollClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="price-card-section">
      <div className="title-div">
        <h2>
          Launch your dream <span>career</span> today.
        </h2>
        <p>
          Experience the first 5 lectures risk-free — get a full refund if
          you're not satisfied!
        </p>
      </div>

      <div className="price-card-container">
        <div className="left-section">
          <img
            src={data.cardImg}
            alt="Technology Illustration"
            className="price-card-img"
          />
        </div>

        <div className="right-section">
          <div className="price-card">
            {data.recommended && (
              <div className="blue-line-div">RECOMMENDED</div>
            )}
            <div className="price-card-title-div">
              <h2>{data.title}</h2>
            </div>
            <div className="price-card-rates">
              <h1>
                {data.price} <span>/month</span>
              </h1>
              <p className="total-fee">Total Fees {data.totalFees}</p>
              <button className="enroll-button" onClick={handleEnrollClick}>
                {data.buttonText || "Enroll Now"}
              </button>
            </div>
            <ul className="price-card-list">
              {data.features &&
                data.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePriceCards;
