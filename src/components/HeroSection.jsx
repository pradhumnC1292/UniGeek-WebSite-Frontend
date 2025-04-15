// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import HeroLeftHeading from "./HeroLeftHeading";
// import CustomDropdown from "./CustomDropdown";
// import "./HeroSection.css";

// const HeroSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     countryCode: "+91", // Default code
//     phone: "",
//     course: "",
//   });
//   const [message, setMessage] = useState("");
//   const [shakeForm, setShakeForm] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSelectCourse = (option) => {
//     // Called when user picks a course in CustomDropdown
//     setFormData((prev) => ({ ...prev, course: option }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const combinedPhone = `${formData.countryCode}-${formData.phone}`;
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         phone: combinedPhone,
//         course: formData.course,
//       };

//       const res = await axios.post("http://localhost:5000/api/form", payload, {
//         headers: { "Content-Type": "application/json" },
//       });

//       if (res.status === 201) {
//         toast.success("Form submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           countryCode: "+91",
//           phone: "",
//           course: "",
//         });
//       } else {
//         toast.error(res.data.error || "Submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Submission error. Please try again.");
//     }
//   };

//   const handleCtaClick = () => {
//     // Check if required fields are empty
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.course
//     ) {
//       setShakeForm(true);
//       setTimeout(() => setShakeForm(false), 500);
//     }
//   };

//   return (
//     <section className="hero-container" data-scroll-section>
//       <ToastContainer />
//       <div className="hero-left">
//         <HeroLeftHeading />
//         <p className="hero-subtext">
//           Getting Quality Education is Now <span>More Easy</span>
//         </p>
//         <button className="hero-cta" onClick={handleCtaClick}>
//           Request Call Back
//         </button>
//       </div>

//       <div className="hero-right" data-scroll data-scroll-speed="2">
//         <div className="hero-bubble"></div>
//         <div className="hero-bubble2"></div>

//         <div className={`form-card ${shakeForm ? "shake" : ""}`}>
//           <h2>Get in touch</h2>
//           <p className="form-subtitle">
//             We'd love to hear from you. Please fill out this form.
//           </p>
//           <h3>Contact US</h3>

//           <form onSubmit={handleSubmit}>
//             <div className="contact__form-div">
//               <label className="contact__form-tag">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="contact__form-input"
//                 placeholder="Enter Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="contact__form-div">
//               <label className="contact__form-tag">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="contact__form-input"
//                 placeholder="Enter Your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Country code and phone in separate inputs */}
//             {/* <div className="contact__form-div">
//               <label className="contact__form-tag">Mobile</label>
//               <input
//                 type="tel"
//                 name="countryCode"
//                 placeholder="+91"
//                 className="counter-code"
//                 value={formData.countryCode}
//                 onChange={handleChange}
//                 required
//                 readOnly
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="0000000000"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 style={{ flex: 1 }}
//               />
//             </div> */}
//             <div className="contact__form-div">
//               <input
//                 type="tel"
//                 name="countryCode"
//                 placeholder="+91"
//                 className="counter-code"
//                 value={formData.countryCode}
//                 onChange={handleChange}
//                 required
//                 readOnly
//               />
//               <label className="contact__form-tag">Phone</label>
//               <input
//                 type="phone"
//                 name="phone"
//                 className="contact__form-input-phone"
//                 placeholder="Enter Your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <CustomDropdown
//               selectedOption={formData.course}
//               onSelect={handleSelectCourse}
//             />

//             <button type="submit" className="submit-btn">
//               Submit
//             </button>
//             <div className="agreement">
//               By submitting, you agree to the{" "}
//               <a href="#terms">Unigeek's Terms</a> &{" "}
//               <a href="#privacy">Privacy Policy</a>
//             </div>
//           </form>

//           {message && <p className="form-message">{message}</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroLeftHeading from "./HeroLeftHeading";
import CustomDropdown from "./CustomDropdown";
import "./HeroSection.css";

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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectCourse = (option) => {
    setFormData((prev) => ({ ...prev, course: option }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const combinedPhone = `${formData.countryCode}-${formData.phone}`;
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: combinedPhone,
        course: formData.course,
      };

      const res = await axios.post("http://localhost:5000/api/form", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "",
        });
      } else {
        toast.error(res.data.error || "Submission failed");
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
        <p className="hero-subtext">
          Learn anytime, anywhere — say goodbye to the daily commute and rigid
          schedules of offline institutes. Study smarter, not harder.
        </p>
        <button className="hero-cta" onClick={handleCtaClick}>
          Request Call Back
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
                type="phone"
                name="phone"
                className="contact__form-input-phone"
                placeholder="Enter Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <CustomDropdown
              selectedOption={formData.course}
              onSelect={handleSelectCourse}
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
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
