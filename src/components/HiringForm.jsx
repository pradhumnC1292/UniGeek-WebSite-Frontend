import React, { useState } from "react";
import axios from "axios";
import "./HiringForm.css";
import { toast } from "react-toastify";

const HiringForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    requrment_doc: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "requrment_doc") {
      setFormData({ ...formData, requrment_doc: files[0] });
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
      formDataToSend.append("linkedin", formData.linkedin);

      if (formData.requrment_doc) {
        formDataToSend.append("requrment_doc", formData.requrment_doc);
      }

      await axios.post("http://localhost:5000/api/hiring", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hiringform-overlay">
      <div className="hiringform-modal">
        <button className="hiringform-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="hiringform-title">Hire from us</h2>
        <form className="hiringform" onSubmit={handleSubmit}>
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
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />

          <label>Requirement Document</label>
          <input type="file" name="requrment_doc" onChange={handleChange} />

          <button
            type="submit"
            className="hiringform-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Continue"}
          </button>
        </form>
        <p className="hiringform-tnc">
          By continuing, you agree to our <a href="#terms">Terms</a> and{" "}
          <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default HiringForm;
