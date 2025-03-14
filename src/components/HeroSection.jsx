import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroLeftHeading from "./HeroLeftHeading";
import "./HeroSection.css";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Default code
    phone: "",
    course: "",
  });
  const [message, setMessage] = useState("");
  const [shakeForm, setShakeForm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const combinedPhone = `${formData.countryCode}-${formData.phone}`;
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: combinedPhone,
        course: formData.course,
      };

      const res = await axios.post("http://localhost:5000/api/form", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "",
        });
      } else {
        toast.error(res.data.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission error. Please try again.");
    }
  };

  const handleCtaClick = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
    }
  };

  return (
    <section className="hero-container" data-scroll-section>
      <ToastContainer />
      <div className="hero-left">
        <HeroLeftHeading />
        <p className="hero-subtext">
          Getting Quality Education is Now <span>More Easy</span>
        </p>
        <button className="hero-cta" onClick={handleCtaClick}>
          Request Call Back
        </button>
      </div>

      <div className="hero-right" data-scroll data-scroll-speed="2">
        <div className="hero-bubble"></div>
        <div className="hero-bubble2"></div>

        <div className={`form-card ${shakeForm ? "shake" : ""}`}>
          <h2>Get in touch</h2>
          <p className="form-subtitle">
            We'd love to hear from you. Please fill out this form.
          </p>
          <h3>Contact US</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Country code and phone in separate inputs */}
            <div className="country-code-div">
              <input
                type="tel"
                name="countryCode"
                placeholder="+91"
                className="counter-code"
                value={formData.countryCode}
                onChange={handleChange}
                required
                readOnly
              />
              <input
                type="tel"
                name="phone"
                placeholder="0000000000"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ flex: 1 }}
              />
            </div>

            <label htmlFor="course">Courses</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="form-select-couses"
            >
              <option value="" id="select-opts">
                Select Course
              </option>
              <option value="Java Full Stack Development" id="select-opts">
                Java Full Stack Development
              </option>
              <option value="MERN Full Stack Development" id="select-opts">
                MERN Full Stack Development
              </option>
              <option value="UI/UX" id="select-opts">
                UI/UX
              </option>
              <option value="LevelUp Programs" id="select-opts">
                LevelUp Programs
              </option>
            </select>

            <button type="submit" className="submit-btn">
              Submit
            </button>

            <div className="agreement">
              By submitting, you agree to the{" "}
              <a href="#terms">Unigeek's Terms</a> &{" "}
              <a href="#privacy">Privacy Policy</a>
            </div>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
