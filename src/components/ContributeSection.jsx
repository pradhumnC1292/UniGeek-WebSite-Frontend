import React, { useState } from "react";
import arrow from "../assets/icons/right-arrow-icon.png";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MentorFormModal from "./MentorFormModal";
import "./ContributeSection.css";

const ContributeSection = () => {
  // State to control if the form modal is open and which role is selected
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  // Toast function to show success message
  const showSuccessToast = () => {
    toast.success("Form submitted successfully!");
  };

  return (
    <section className="contribute-section">
      <ToastContainer />
      <h2 className="contribute-title">
        Step In and Make an <span>Impact</span>
      </h2>
      <div className="contribute-cards-container">
        {/* Card 1: Educator */}
        <div className="contribute-card">
          <h3 className="card-title">
            <FaChalkboardTeacher /> Educator
          </h3>
          <ul className="card-list">
            <li>
              Deliver high-impact sessions led with real-world experience.
            </li>
            <li>Design structured, practical curriculum for core concepts.</li>
            <li>Ensure course content stays aligned with industry trends.</li>
            <li>Minimum 5+ years at leading tech companies required.</li>
          </ul>
          <button
            className="apply-btn"
            onClick={() => handleApplyClick("Educator")}
          >
            Apply Now{" "}
            <img src={arrow} alt="Right arrow" className="arrow-icon" />
          </button>
        </div>

        {/* Card 2: Doubt Solver */}
        <div className="contribute-card">
          <h3 className="card-title">
            <LuBrainCircuit /> Doubt Solver
          </h3>
          <ul className="card-list">
            <li>Resolve student queries via live chat and discussion calls.</li>
            <li>Guide learners patiently with concept-based answers.</li>
            <li>
              Coordinate with educators to handle deeper technical doubts.
            </li>
            <li>1+ years experience or IIT/NIT background preferred.</li>
          </ul>
          <button
            className="apply-btn"
            onClick={() => handleApplyClick("Doubt Solver")}
          >
            Apply Now{" "}
            <img src={arrow} alt="Right arrow" className="arrow-icon" />
          </button>
        </div>

        {/* Card 3: Batch Manager */}
        <div className="contribute-card">
          <h3 className="card-title">
            <FaPeopleRoof /> Batch Manager
          </h3>
          <ul className="card-list">
            <li>Coordinate schedules and maintain attendance.</li>
            <li>Track learner engagement and assist communication.</li>
            <li>Collect feedback and improve learning flow.</li>
            <li>Pursuing/completed BBA, B.Com, or MBA degree.</li>
          </ul>
          <button
            className="apply-btn"
            onClick={() => handleApplyClick("Batch Manager")}
          >
            Apply Now{" "}
            <img src={arrow} alt="Right arrow" className="arrow-icon" />
          </button>
        </div>
      </div>

      {/* Modal Form for Mentor Application */}
      {showForm && (
        <MentorFormModal
          role={selectedRole}
          onClose={handleCloseModal}
          onSuccess={showSuccessToast}
        />
      )}
    </section>
  );
};

export default ContributeSection;
