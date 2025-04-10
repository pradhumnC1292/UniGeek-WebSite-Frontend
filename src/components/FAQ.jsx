import React, { useState, useEffect } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillRocketFill } from "react-icons/bs";
import axios from "axios";
import "./FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("course");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faqs")
      .then((response) => {
        setFaqs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter the FAQs by the selected category
  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="faq-section">
      <div className="heading-faq">
        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <p>These are the most commonly asked questions about UniGeek.</p>
      </div>
      {/* Category Tabs */}
      <div className="faq-tabs">
        <button
          className={`faq-tab ${
            selectedCategory === "course" ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory("course")}
        >
          <i className="faq-icon faq-icon-course">
            <RiGraduationCapFill />
          </i>{" "}
          Course
        </button>
        <button
          className={`faq-tab ${
            selectedCategory === "pricing" ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory("pricing")}
        >
          <i className="faq-icon faq-icon-pricing">
            <MdPriceChange />
          </i>{" "}
          Pricing
        </button>
        <button
          className={`faq-tab ${
            selectedCategory === "mentors" ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory("mentors")}
        >
          <i className="faq-icon faq-icon-mentors">
            <FaPeopleGroup />
          </i>{" "}
          Mentors
        </button>
        <button
          className={`faq-tab ${
            selectedCategory === "placements" ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory("placements")}
        >
          <i className="faq-icon faq-icon-placements">
            <BsFillRocketFill />
          </i>{" "}
          Placements
        </button>
      </div>

      <div className="faq-container">
        {filteredFaqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{item.question}</h3>
              <div className="toggle">
                <span className="faq-toggle">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
