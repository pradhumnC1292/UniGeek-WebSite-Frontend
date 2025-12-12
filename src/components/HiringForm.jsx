import React, { useState } from "react";
import axios from "axios";
import "./HiringForm.css";
import { toast } from "react-toastify";

const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const HiringForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    role: "",
    techStack: "",
    hiringType: "",
    attachment: null,
  });
  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      const file = files[0];
      if (file) {
        // Validate file type
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        const allowedExtensions = [".pdf", ".doc", ".docx"];
        const fileExtension = "." + file.name.split(".").pop().toLowerCase();

        if (
          !allowedTypes.includes(file.type) &&
          !allowedExtensions.includes(fileExtension)
        ) {
          setFileError("Only PDF and DOC files are supported.");
          e.target.value = ""; // Clear the input
          return;
        }

        // Validate file size (5MB = 5 * 1024 * 1024 bytes)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
          setFileError("File size must be less than 5MB.");
          e.target.value = ""; // Clear the input
          return;
        }

        setFileError("");
        setFormData({ ...formData, [name]: file });
      } else {
        setFormData({ ...formData, [name]: null });
        setFileError("");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate file if present
    if (formData.attachment) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension =
        "." + formData.attachment.name.split(".").pop().toLowerCase();

      if (
        !allowedTypes.includes(formData.attachment.type) &&
        !allowedExtensions.includes(fileExtension)
      ) {
        setFileError("Only PDF and DOC files are supported.");
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (formData.attachment.size > maxSize) {
        setFileError("File size must be less than 5MB.");
        return;
      }
    }

    setLoading(true);
    setFileError("");

    try {
      const submitData = new FormData();
      submitData.append("companyName", formData.companyName);
      submitData.append("contactName", formData.contactName);
      submitData.append("email", formData.email);
      if (formData.phone) submitData.append("phone", formData.phone);
      if (formData.role) submitData.append("role", formData.role);
      if (formData.techStack)
        submitData.append("techStack", formData.techStack);
      if (formData.hiringType)
        submitData.append("hiringType", formData.hiringType);
      if (formData.attachment)
        submitData.append("attachment", formData.attachment);

      await axios.post(`${API_URL}/hiring-requests`, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(
        "Hiring request submitted successfully! We'll contact you soon."
      );
      if (onSuccess) onSuccess();
      // Clear form
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        role: "",
        techStack: "",
        hiringType: "",
        attachment: null,
      });
      setFileError("");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error.response?.data?.message || "Submission failed. Please try again.";
      toast.error(errorMessage);
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
        <h2 className="hiringform-title">Hire from Prokopi</h2>
        <form className="hiringform" onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name *"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contactName"
            placeholder="Contact Name *"
            value={formData.contactName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            placeholder="Position/Role"
            value={formData.role}
            onChange={handleChange}
          />

          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack (e.g., React, Node.js, Java)"
            value={formData.techStack}
            onChange={handleChange}
          />

          <select
            name="hiringType"
            value={formData.hiringType}
            onChange={handleChange}
            className="hiringform-select"
          >
            <option value="">Select Hiring Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Internship-to-Hire">Internship-to-Hire</option>
            <option value="Contract">Contract</option>
          </select>

          <div className="hiringform-file-wrapper">
            <label htmlFor="attachment" className="hiringform-file-label">
              Attach Requirements Document (Optional)
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleChange}
              className="hiringform-file-input"
            />
            <p className="hiringform-file-hint">
              Supported formats: PDF, DOC, DOCX (Max size: 5MB)
            </p>
            {fileError && <p className="hiringform-file-error">{fileError}</p>}
            {formData.attachment && !fileError && (
              <p className="hiringform-file-success">
                ✓ {formData.attachment.name} (
                {(formData.attachment.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>

          <button
            type="submit"
            className="hiringform-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
          <p className="hiringform-tnc">
            By continuing, you agree to our{" "}
            <a href="terms-and-conditions">Terms</a> and{" "}
            <a href="privacy-policy">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
