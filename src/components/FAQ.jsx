import React, { useState } from "react";
import floor from "../assets/images/Floor.png";
import shadows from "../assets/images/Shadows.png";
import character1 from "../assets/images/Character_1.png";
import character2 from "../assets/images/Character_2.png";
import questionmark from "../assets/images/Question_Mark.png";
import plants from "../assets/images/Plants.png";
import faqImg from "../assets/images/faq-img.png";
import "./FAQ.css";

const FAQ = () => {
  // Define your 10 questions and answers here
  const faqData = [
    {
      question: "What courses and programs do you offer?",
      answer:
        "We offer a wide range of courses covering subjects like technology, business, arts, and science, tailored for beginners to advanced learners.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Simply sign up, browse our courses, and click 'Enroll' on the course page. Follow the payment instructions to complete enrollment.",
    },
    {
      question: "Are the courses self-paced or instructor-led?",
      answer:
        "We provide both self-paced and instructor-led options, so you can choose what best suits your learning style.",
    },
    {
      question: "Do you provide certificates after course completion?",
      answer:
        "Yes! Upon successfully finishing all required modules and assessments, you receive a certificate of completion.",
    },
    {
      question:
        "What payment options are available, and is there a refund policy?",
      answer:
        "We accept credit/debit cards, net banking, and popular digital wallets. A partial or full refund may be granted based on our refund policy.",
    },
    {
      question: "Can I access the courses on mobile devices?",
      answer:
        "Absolutely. Our platform is mobile-responsive, allowing you to access all course materials from your smartphone or tablet.",
    },
    {
      question: "How can I track my progress?",
      answer:
        "Our dashboard provides detailed progress tracking, showing completed modules, quiz scores, and upcoming assignments.",
    },
    {
      question: "Is there any prerequisite knowledge required?",
      answer:
        "Each course description specifies prerequisites if any. Many beginner-level courses require no prior experience.",
    },
    {
      question: "Do you offer job placement or internship opportunities?",
      answer:
        "Yes, we partner with various companies and provide placement assistance for standout performers in our advanced programs.",
    },
    {
      question: "How do I contact support if I have more questions?",
      answer:
        "You can reach out to our support team via email, live chat, or phone. Visit the 'Contact Us' page for details.",
    },
    {
      question: "What courses and programs do you offer?",
      answer:
        "We offer a wide range of courses covering subjects like technology, business, arts, and science, tailored for beginners to advanced learners.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Simply sign up, browse our courses, and click 'Enroll' on the course page. Follow the payment instructions to complete enrollment.",
    },
    {
      question: "Are the courses self-paced or instructor-led?",
      answer:
        "We provide both self-paced and instructor-led options, so you can choose what best suits your learning style.",
    },
    {
      question: "Do you provide certificates after course completion?",
      answer:
        "Yes! Upon successfully finishing all required modules and assessments, you receive a certificate of completion.",
    },
    {
      question:
        "What payment options are available, and is there a refund policy?",
      answer:
        "We accept credit/debit cards, net banking, and popular digital wallets. A partial or full refund may be granted based on our refund policy.We accept credit/debit cards, net banking, and popular digital wallets. A partial or full refund may be granted based on our refund policy.",
    },
    {
      question: "Can I access the courses on mobile devices?",
      answer:
        "Absolutely. Our platform is mobile-responsive, allowing you to access all course materials from your smartphone or tablet.",
    },
    {
      question: "How can I track my progress?",
      answer:
        "Our dashboard provides detailed progress tracking, showing completed modules, quiz scores, and upcoming assignments.",
    },
    {
      question: "Is there any prerequisite knowledge required?",
      answer:
        "Each course description specifies prerequisites if any. Many beginner-level courses require no prior experience.",
    },
    {
      question: "Do you offer job placement or internship opportunities?",
      answer:
        "Yes, we partner with various companies and provide placement assistance for standout performers in our advanced programs.",
    },
    {
      question: "How do I contact support if I have more questions?",
      answer:
        "You can reach out to our support team via email, live chat, or phone. Visit the 'Contact Us' page for details.",
    },
  ];

  // State to track which FAQ is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the same question is clicked again, close it. Otherwise, open the clicked question.
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section" data-scroll-section>
      <h2 className="faq-title">
        “Frequently asked <span>questions</span>”
      </h2>
      <div className="faq-container-sec">
        <div className="faq-left-div">
          {/* <img src={floor} alt="" className="faq-img-floor" />
          <img src={questionmark} alt="" className="faq-img-question" />
          <img src={shadows} alt="" className="faq-img-shadows" />
          <img src={character1} alt="" className="faq-img-cha01" />
          <img src={character2} alt="" className="faq-img-cha02" />
          <img src={plants} alt="" className="faq-img-plants" /> */}
          <img src={faqImg} alt="" className="faq-img"/>
        </div>
        <div className="faq-right-div">
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "open" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                >
                  <h3>{item.question}</h3>
                  {/* Show + or - based on open/close state */}
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;

// import React from "react";

// const FAQ = () => {
//   return (
//     <section data-scroll-section>
//       <h1>FAQ</h1>
//     </section>
//   );
// };

// export default FAQ;
