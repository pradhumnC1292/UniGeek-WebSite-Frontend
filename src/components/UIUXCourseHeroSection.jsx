import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDropdown from "./CustomDropdown";
import UIUXCoursePageLeftHeading from "./UIUXCoursePageLeftHeading";
import "./JavaCourseHeroSection.css";

const UIUXCourseHeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "",
  });
  const [message, setMessage] = useState("");
  const [shakeForm, setShakeForm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectCourse = (option) => {
    setFormData((prev) => ({ ...prev, course: option }));
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

  useEffect(() => {
    const handleRequestCallback = () => {
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
    };
    window.addEventListener("requestCallback", handleRequestCallback);
    return () => {
      window.removeEventListener("requestCallback", handleRequestCallback);
    };
  }, []);

  return (
    <section className="course-hero-container" data-scroll-section>
      <ToastContainer />
      <div className="course-hero-left">
        <UIUXCoursePageLeftHeading />
        <p className="course-hero-subtext">
          Master the art of UI/UX design, Design psychology, AI and Tools to
          create intuitive and engaging digital experiences.
        </p>
        <p className="course-hero-subtext">
          Learn from top design professionals with hands-on projects and
          real-world scenarios.
        </p>
        <p className="course-hero-subtext">
          Build projects like responsive websites, mobile apps, and interactive
          prototypes.
        </p>
        <button className="course-hero-cta" onClick={handleCtaClick}>
          Enroll Now
        </button>
      </div>

      <div className="course-hero-right" data-scroll data-scroll-speed="2">
        <div className="course-hero-bubble"></div>
        <div className="course-hero-bubble2"></div>

        <div className={`form-card ${shakeForm ? "shake" : ""}`}>
          <h2>Get in touch</h2>
          <p className="form-subtitle">
            We'd love to hear from you. Please fill out this form.
          </p>
          <h3>Contact US</h3>

          <form onSubmit={handleSubmit}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
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
              <label className="contact__form-tag">Phone</label>
              <input
                type="phone"
                name="phone"
                className="contact__form-input-phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <CustomDropdown
              selectedOption={formData.course}
              onSelect={handleSelectCourse}
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
            <div className="agreement">
              By submitting, you agree to the{" "}
              <a href="terms-and-conditions">Geekskul's Terms</a> &{" "}
              <a href="privacy-policy">Privacy Policy</a>
            </div>
          </form>
          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default UIUXCourseHeroSection;
