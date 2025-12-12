import React, { useState } from "react";
import axios from "axios";
import "./MentorFormModal.css";

const MentorFormModal = ({ role, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    role: role || "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\d{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName.trim());
      formDataToSend.append("email", formData.email.trim().toLowerCase());
      formDataToSend.append("phone", formData.phone.replace(/\D/g, "")); // Remove non-digits
      formDataToSend.append("role", formData.role);

      if (formData.resume) {
        // Validate file type
        const allowedTypes = ["application/pdf"];
        if (!allowedTypes.includes(formData.resume.type)) {
          setErrors({ ...errors, resume: "Please upload a PDF file only" });
          setLoading(false);
          return;
        }

        // Validate file size (5MB max)
        if (formData.resume.size > 5 * 1024 * 1024) {
          setErrors({ ...errors, resume: "File size must be less than 5MB" });
          setLoading(false);
          return;
        }

        formDataToSend.append("resume", formData.resume);
      }

      // Make API call to your backend
      const response = await axios.post(
        "http://localhost:5000/api/mentorform",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);

      // Show success toast on main component
      onSuccess();
      // Close modal
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);

      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data?.message ||
          error.response.data?.error ||
          "Submission failed";

        if (error.response.status === 400) {
          // Validation errors from server
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          } else {
            alert(errorMessage);
          }
        } else if (error.response.status === 409) {
          // Duplicate email
          setErrors({ email: "This email is already registered" });
        } else {
          alert(errorMessage);
        }
      } else if (error.request) {
        // Network error
        alert(
          "Network error. Please check your internet connection and try again."
        );
      } else {
        // Other error
        alert("Submission failed, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mentor-form-overlay">
      <div className="mentor-form-modal">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="mentor-form-title">Become a {role}</h2>
        <form className="mentor-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "error" : ""}
              required
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              required
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              required
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              readOnly
              className="readonly-field"
            />
            {errors.role && (
              <span className="error-message">{errors.role}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="resume" className="file-label">
              Upload Resume (PDF only, max 5MB)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              accept=".pdf,application/pdf"
              className={errors.resume ? "error" : ""}
            />
            {errors.resume && (
              <span className="error-message">{errors.resume}</span>
            )}
            {formData.resume && (
              <div className="file-info">
                <small>Selected: {formData.resume.name}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mentor-form-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
        <p className="mentor-form-tnc">
          By submitting, you agree to our{" "}
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default MentorFormModal;
