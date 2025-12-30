// import React from "react";
// import "./CoursePriceCards.css";

// const CoursePriceCards = ({ data }) => {
//   const handleEnrollClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section className="price-card-section">
//       <div className="title-div">
//         <h2>
//           Launch your dream <span>career</span> today.
//         </h2>
//         <p>
//           Experience the first 5 lectures risk-free — get a full refund if
//           you're not satisfied!
//         </p>
//       </div>

//       <div className="price-card-container">
//         <div className="left-section">
//           <div className="features-section">
//             <h3 className="features-title">What's Included</h3>
//             <ul className="features-list">
//               {data.features &&
//                 data.features.map((feature, idx) => (
//                   <li key={idx} className="feature-item">
//                     <span className="feature-icon"></span>
//                     <span className="feature-text">{feature}</span>
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </div>

//         <div className="right-section">
//           <div className="price-card">
//             {data.recommended && (
//               <div className="blue-line-div">RECOMMENDED</div>
//             )}
//             <div className="price-card-title-div">
//               <h2>{data.title}</h2>
//             </div>
//             <div className="price-card-rates">
//               <h1>
//                 {data.price} <span>/month</span>
//               </h1>
//               <p className="total-fee">Total Fees {data.totalFees}</p>
//               <button className="enroll-button" onClick={handleEnrollClick}>
//                 {data.buttonText || "Enroll Now"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursePriceCards;

import React from "react";
import "./CoursePriceCards.css";
import SquishyPriceCard from "../components/ui/SquishyPriceCard";

const CoursePriceCards = ({ data }) => {
  const handleEnrollClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="cp-section">
      <div className="cp-container">
        {/* Header */}
        <div className="cp-header">
          <p className="cp-pill">Pricing</p>
          <h2 className="cp-title">
            Launch your dream <span>career</span> today.
          </h2>
          <p className="cp-subtitle">
            Experience the first 5 lectures risk-free — get a full refund if
            you're not satisfied!
          </p>
        </div>

        {/* Content */}
        <div className="cp-grid">
          {/* Left: bullets */}
          <div className="cp-left">
            <h3 className="cp-left-title">What you get</h3>
            <p className="cp-left-sub">
              Everything included in your plan — simple, transparent, and
              student-first.
            </p>

            <ul className="cp-bullets">
              {data?.features?.map((feature, idx) => (
                <li key={idx} className="cp-bullet">
                  <span className="cp-check" aria-hidden="true">
                    ✓
                  </span>
                  <span className="cp-bullet-text">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="cp-note">
              <span className="cp-note-dot" />
              <p>
                No hidden charges. Cancel anytime. Support included with every
                plan.
              </p>
            </div>
          </div>

          {/* Right: Squishy Card */}
          <div className="cp-right">
            <SquishyPriceCard
              planTag={data?.recommended ? "Recommended" : "Plan"}
              price={data?.price}
              period="/month"
              title={data?.title}
              description={`Total Fees: ${data?.totalFees}`}
              buttonText={data?.buttonText || "Enroll Now"}
              onClick={handleEnrollClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePriceCards;
