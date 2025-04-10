import React from "react";
import img01 from "../assets/images/bm-img01.png";
import img02 from "../assets/images/bm-img02.png";
import img03 from "../assets/images/bm-img03.png";
import "./BecomeMentorBanner.css";

const BecomeMentorBanner = () => {
  return (
    <section className="become-mentor-banner-sec">
      <div className="become-mentor-banner-content">
        {/* Left Side Image Grid */}
        <div className="content-left-div">
          <div className="img-grid-div">
            <div className="left-img-upper-div">
              <img src={img01} alt="" />
            </div>
            <div className="left-img-lower-div">
              <div className="left-lower-left-div">
                <img src={img02} alt="" />
              </div>
              <div className="left-lower-right-div">
                <img src={img03} alt="" />
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
              <div className="info-icon">💰</div>
              <div className="info-text">
                <h4>Earn Extra Income</h4>
                <p>
                  Get rewarded for your time and expertise with a reliable
                  secondary income stream.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🙌</div>
              <div className="info-text">
                <h4>Gain Respect & Appreciation</h4>
                <p>
                  Experience the personal satisfaction of being recognized and
                  appreciated by learners.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🧭</div>
              <div className="info-text">
                <h4>Inspire the Next Generation</h4>
                <p>
                  Play a vital role in guiding ambitious learners toward their
                  career goals.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div className="info-text">
                <h4>Grow Your Professional Network</h4>
                <p>
                  Connect with a diverse community of students, mentors, and
                  industry professionals.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💡</div>
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
