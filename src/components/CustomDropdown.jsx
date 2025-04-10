import React, { useState, useRef, useEffect } from "react";
import "./CustomDropdown.css"; // We'll add some basic styles

function CustomDropdown({ selectedOption, onSelect }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Hardcoded options for the dropdown
  const options = [
    "Java Full Stack Development",
    "MERN Full Stack Development",
    "UI/UX",
    "DevOps",
    "Data Analysis",
    "LevelUp Programs",
  ];

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    // Pass the selected option back up to the parent
    onSelect(option);
    setOpen(false);
  };

  // Close dropdown if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown contact__form-div" ref={dropdownRef}>
      <label className="contact__form-tag">Courses</label>
      <div
        className="dropdown-header .contact__form-input"
        onClick={handleToggle}
      >
        {selectedOption || "Select Course"}
      </div>
      {open && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-list-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
