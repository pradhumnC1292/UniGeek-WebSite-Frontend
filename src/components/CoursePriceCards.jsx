import React from "react";
import "./CoursePriceCards.css";
// import cardImg from "../assets/images/website-price-card-image.png";

const CoursePriceCards = ({ data }) => {
  // data is an object with the dynamic fields:
  // title, price, totalFees, features (array), recommended (boolean), buttonText (optional)
  return (
    <section className="price-card-section">
      <div className="title-div">
        <h2>
          Launch your dream <span>career</span> today.
        </h2>
        <p>
          Experience the first 10 lectures risk-free — get a full refund if
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
            <div className="price-card-bubble"></div>
            <div className="blue-line-div">RECOMMENDED</div>
            <div className="price-card-title-div">
              <h2>{data.title}</h2>
            </div>
            <div className="price-card-rates">
              <h1>
                {data.price} <span>/month</span>
              </h1>
              <p className="total-fee">Total Fees {data.totalFees}</p>
              <button className="enroll-button">
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
