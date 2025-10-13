import React, { useState, useEffect } from "react";
import "./HiringPageHeroSec.css";
import { FaRocket, FaBook, FaMoneyBillWave } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import Hpimg03 from "../assets/images/hp-img03.png";
import Hpimg04 from "../assets/images/hp-img04.png";
import HiringForm from "./HiringForm";
import { AnimatedGridPattern } from "./AnimatedGridPattern";
import { toast, ToastContainer } from "react-toastify";

const HiringPageHeroSec = () => {
  // State to control modal visibility
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // When "Hire Now" is clicked, show the modal
  const handleHireNow = () => {
    setOpenModal(true);
  };

  // Callback to close the modal (passed to the form)
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Callback after a successful form submission
  const handleSuccess = () => {
    toast.success("Thank you! We'll contact you soon.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setOpenModal(false);
  };

  return (
    <section className="hiring-hero-sec" data-scroll-section>
      {/* Animated Grid Pattern Background */}
      <div className="hero-grid-pattern">
        <AnimatedGridPattern
          numSquares={isMobile ? 20 : 40}
          maxOpacity={isMobile ? 0.6 : 0.5}
          duration={isMobile ? 4 : 3}
          repeatDelay={isMobile ? 2 : 1}
          width={isMobile ? 50 : 50}
          height={isMobile ? 50 : 50}
        />
      </div>
      {/* Left Side: Text Content */}
      <ToastContainer />
      <div className="hiring-hero-left-div">
        <h1 className="hiring-hero-heading">
          Hire Industry-Ready <span>Talent</span> — Instantly.
        </h1>
        <p className="hiring-hero-subheading">
          Tired of sorting through unqualified resumes? Discover top-tier,
          pre-trained tech professionals from our elite talent pool — fully
          equipped to deliver from Day One.
        </p>

        <div className="hiring-features">
          <div className="hiring-feature-card">
            <div className="hiring-feature-icon">
              <FaRocket />
            </div>
            <div className="hiring-feature-text">
              <h2>Job-Ready from the Start</h2>
              <p>
                Our candidates are rigorously trained on real-world projects and
                are ready to contribute immediately — no onboarding hassle.
              </p>
            </div>
          </div>

          <div className="hiring-feature-card">
            <div className="hiring-feature-icon">
              <FaBook />
            </div>
            <div className="hiring-feature-text">
              <h2>Pre-Vetted &amp; Pre-Trained</h2>
              <p>
                Handpicked through a selective process and mentored by top
                industry experts, our talent is both technically sharp and
                team-ready.
              </p>
            </div>
          </div>

          <div className="hiring-feature-card">
            <div className="hiring-feature-icon">
              <FaMoneyBillWave />
            </div>
            <div className="hiring-feature-text">
              <h2>Zero Hiring Fee</h2>
              <p>
                Yes, really. Gain access to proven talent at zero cost — no
                recruitment charges, no hidden fees. Just pure value.
              </p>
            </div>
          </div>
          <button className="hiring-cta" onClick={handleHireNow}>
            Hire Now
          </button>
        </div>
      </div>

      {/* Right Side: Image Content */}
      <div className="hiring-right-div">
        <div className="hiring-right-image-container">
          <div className="hiring-right-image-left-div">
            <div className="hiring-right-img-left-upper">
              <img src={Hpimg03} alt="" className="hiring-imgs" />
            </div>
            <div className="hiring-right-img-left-lower">
              <div className="hiring-right-img-left-lower-icon">
                <BsPersonWorkspace />
              </div>
              <div className="hiring-right-img-left-lower-title">
                <h2>READY</h2>
                <h4>to-Work</h4>
              </div>
            </div>
          </div>
          <div className="hiring-right-image-right-div">
            <div className="hiring-right-img-right-upper">
              <div className="hiring-right-img-right-upper-icon">
                <RiTimeLine />
              </div>
              <div className="hiring-right-img-right-upper-title">
                <h2>SAVE</h2>
                <h4>Time</h4>
              </div>
            </div>
            <div className="hiring-right-img-right-lower">
              <img src={Hpimg04} alt="" className="hiring-imgs" />
            </div>
          </div>
        </div>
      </div>

      {/* Render the HiringForm modal conditionally */}
      {openModal && (
        <HiringForm onClose={handleCloseModal} onSuccess={handleSuccess} />
      )}
    </section>
  );
};

export default HiringPageHeroSec;
