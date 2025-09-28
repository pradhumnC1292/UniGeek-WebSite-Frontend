import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroLeftHeading from "./HeroLeftHeading";
import CustomDropdown from "./CustomDropdown";
import "./HeroSection.css";
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
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

  // Fetch courses from database on component mount
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setCoursesLoading(true);

        // Try to fetch courses - handle authentication issue gracefully
        const response = await axios.get("http://localhost:5000/api/courses", {
          validateStatus: (status) => status < 500,
        });

        if (response.status === 200 && Array.isArray(response.data)) {
          // Filter out disabled courses and map to frontend format
          const activeCourses = response.data
            .filter((course) => !course.disabled)
            .map((course) => ({
              id: course._id,
              title: course.title,
              disabled: course.disabled || false,
            }));

          setAvailableCourses(activeCourses);
          console.log("Loaded courses from database:", activeCourses.length);
        } else if (response.status === 401 || response.status === 403) {
          // Authentication required - use empty array and log warning
          console.warn(
            "Course endpoint requires authentication. Please start the server and ensure the endpoint is public."
          );
          setAvailableCourses([]);
        } else {
          console.error(
            "Failed to fetch courses:",
            response.status,
            response.data
          );
          setAvailableCourses([]);
        }
      } catch (error) {
        if (error.code === "ECONNREFUSED") {
          console.error(
            "Backend server is not running. Please start the server at http://localhost:5000"
          );
        } else {
          console.error("Failed to load courses:", error.message);
        }
        setAvailableCourses([]);
      } finally {
        setCoursesLoading(false);
      }
    };

    loadCourses();
  }, []);

  // Helper function to find course ID by title
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
      // Format phone number correctly for Indian validation
      const phoneNumber = formData.phone.replace(/\D/g, ""); // Remove all non-digits

      // Validate phone number format (10 digits starting with 6-9)
      if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
        toast.error(
          "Please enter a valid 10-digit Indian phone number starting with 6-9"
        );
        return;
      }

      // Find the course ID for the selected course title
      const courseId = findCourseIdByTitle(availableCourses, formData.course);

      if (!courseId) {
        toast.error("Please select a valid course");
        return;
      }

      // Send correct payload format
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: phoneNumber, // Send only 10 digits
        courseInterest: courseId, // Send course ID from database
      };

      console.log("Submitting enquiry payload:", payload); // Debug log

      const res = await axios.post(
        "http://localhost:5000/api/enquiries",
        payload,
        {
          headers: { "Content-Type": "application/json" },
          validateStatus: () => true,
        }
      );

      console.log("Enquiry response:", res.status, res.data); // Debug log

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
        // Show detailed error message
        const errorMessage =
          res.data?.message || res.data?.error || "Submission failed";
        console.error("Submission error:", res.status, res.data);
        toast.error(`Submission failed: ${errorMessage}`);
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

  // Listen for the custom "requestCallback" event from Navbar
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
    <section className="hero-container" data-scroll-section>
      <ToastContainer />
      <div className="hero-left">
        <HeroLeftHeading />
        <p className="hero-subtext01">
          Geekskul is the next-gen <span>Gurukul </span> for passionate tech
          learners.
        </p>
        <p className="hero-subtext01">
          Learn anytime, anywhere — say goodbye to the daily commute and rigid
          schedules of offline institutes. Study smarter, not harder.
        </p>
        <button className="nn-cta hero-cta" onClick={handleCtaClick}>
          <FaPhoneAlt aria-hidden="true" />
          <span>Request Callback</span>
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
                placeholder="Enter Your email"
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
            <div className="already-user-div">
              <h3>
                Already a user : <span>SignIn</span>
              </h3>
            </div>
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

export default HeroSection;
