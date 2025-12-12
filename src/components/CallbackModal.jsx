import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import CustomDropdown from "./CustomDropdown";
import "./CustomDropdown.css";
import "./CallbackModal.css";

const CallbackModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "",
  });
  const [availableCourses, setAvailableCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch courses from database
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
          console.log("Loaded courses from database:", activeCourses.length);
        } else {
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

    if (isOpen) {
      loadCourses();
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      // Format phone number correctly for Indian validation
      const phoneNumber = formData.phone.replace(/\D/g, ""); // Remove all non-digits

      // Validate phone number format (10 digits starting with 6-9)
      if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
        toast.error(
          "Please enter a valid 10-digit Indian phone number starting with 6-9"
        );
        setIsSubmitting(false);
        return;
      }

      // Find the course ID for the selected course title
      const courseId = findCourseIdByTitle(availableCourses, formData.course);

      if (!courseId) {
        toast.error("Please select a valid course");
        setIsSubmitting(false);
        return;
      }

      // Send correct payload format
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: phoneNumber, // Send only 10 digits
        courseInterest: courseId, // Send course ID from database
      };

      console.log("Submitting enquiry payload:", payload);

      const res = await axios.post(
        "http://localhost:5000/api/enquiries",
        payload,
        {
          headers: { "Content-Type": "application/json" },
          validateStatus: () => true,
        }
      );

      console.log("Enquiry response:", res.status, res.data);

      if (res.status === 201) {
        toast.success("Form submitted successfully! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "",
        });
        // Close modal after successful submission
        setTimeout(() => {
          onClose();
        }, 1500);
      } else if (res.status === 409) {
        toast.success("You have already submitted the form. We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "",
        });
        setTimeout(() => {
          onClose();
        }, 1500);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ToastContainer />
      <div className="callback-modal-overlay" onClick={onClose}>
        <div
          className="callback-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="callback-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          <div className="callback-modal-header">
            <h2>Request Callback</h2>
            <p className="callback-modal-subtitle">
              Fill out this form and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="callback-modal-form">
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

            <button
              type="submit"
              className="callback-modal-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <div className="callback-modal-agreement">
              By submitting, you agree to the{" "}
              <a href="/terms-and-conditions">Geekskul's Terms</a> &{" "}
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CallbackModal;

