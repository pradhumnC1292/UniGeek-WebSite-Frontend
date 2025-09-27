import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDropdown from "./CustomDropdown";
import UIUXCoursePageLeftHeading from "./UIUXCoursePageLeftHeading";
import "./JavaCourseHeroSection.css"; // reuse same CSS

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
  const [availableCourses, setAvailableCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setCoursesLoading(true);
        const response = await axios.get("http://localhost:5000/api/courses", {
          validateStatus: (status) => status < 500,
        });

        if (response.status === 200 && Array.isArray(response.data)) {
          const activeCourses = response.data
            .filter((course) => !course.disabled)
            .map((course) => ({
              id: course._id,
              title: course.title,
              disabled: course.disabled || false,
            }));
          setAvailableCourses(activeCourses);
        } else {
          setAvailableCourses([]);
        }
      } catch (error) {
        console.error("Failed to load courses:", error.message);
        setAvailableCourses([]);
      } finally {
        setCoursesLoading(false);
      }
    };

    loadCourses();
  }, []);

  const findCourseIdByTitle = (courses, title) => {
    const course = courses.find((c) => c.title === title);
    return course ? course.id : null;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectCourse = (option) => {
    setFormData((prev) => ({ ...prev, course: option }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const phoneNumber = formData.phone.replace(/\D/g, "");

      if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
        toast.error(
          "Enter a valid 10-digit Indian phone number starting with 6-9"
        );
        return;
      }

      const courseId = findCourseIdByTitle(availableCourses, formData.course);
      if (!courseId) {
        toast.error("Please select a valid course");
        return;
      }

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: phoneNumber,
        courseInterest: courseId,
      };

      const res = await axios.post(
        "http://localhost:5000/api/enquiries",
        payload,
        {
          headers: { "Content-Type": "application/json" },
          validateStatus: () => true,
        }
      );

      if (res.status === 201) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "",
        });
      } else if (res.status === 409) {
        toast.success("You have already submitted the form.");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "",
        });
      } else {
        toast.error(
          `Submission failed: ${res.data?.message || "Unknown error"}`
        );
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
          Become a job-ready UI/UX Designer by mastering user research,
          wireframing, prototyping, visual design, and design systems.
        </p>
        <p className="course-hero-subtext">
          Learn industry tools like Figma and FigJam with workflows used at top
          product companies.
        </p>
        <p className="course-hero-subtext">
          Build a portfolio with real case studies: mobile apps, dashboards, and
          end-to-end product flows.
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
                type="tel"
                name="phone"
                className="contact__form-input-phone"
                placeholder="Enter 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                pattern="[6-9][0-9]{9}"
                title="Enter a valid 10-digit Indian phone number starting with 6-9"
                required
              />
            </div>

            <CustomDropdown
              selectedOption={formData.course}
              onSelect={handleSelectCourse}
              courses={availableCourses}
              loading={coursesLoading}
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
