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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("role", formData.role);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      // Make an API call to your backend
      await axios.post("http://localhost:5000/api/mentorform", formDataToSend);

      // Show success toast on main component
      onSuccess();
      // Close modal
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed, please try again.");
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
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
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

          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            readOnly
          />

          <label>Upload Resume</label>
          <input type="file" name="resume" onChange={handleChange} />

          <button
            type="submit"
            className="mentor-form-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Continue"}
          </button>
        </form>
        <p className="mentor-form-tnc">
          By continuing, you agree to our <a href="#terms">Terms</a> and{" "}
          <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default MentorFormModal;
