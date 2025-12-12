import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularTestimonials } from "./CircularTestimonials";
import "./CircularTestimonials.css";

const CircularTestimonialsSection = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/mentors");
        // Normalize API response to always be an array
        const mentorsList = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
          ? data.data
          : [];
        setMentors(mentorsList);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setMentors([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  // Map mentors data to testimonials format
  const testimonials = mentors.map((mentor) => ({
    name: mentor.name,
    designation: `${mentor.position}, ${mentor.company}`,
    quote: mentor.experience
      ? `With ${mentor.experience} of experience, ${mentor.name} brings expertise in ${mentor.tag || "software development"} to guide students toward success.`
      : `${mentor.name} is a ${mentor.position} at ${mentor.company}, bringing real-world industry experience to mentor students.`,
    src: mentor.image,
    tag: mentor.tag,
    experience: mentor.experience,
  }));

  // Customize colors to match the site's theme
  const customColors = {
    name: "#1a1a1a",
    designation: "#6b7280",
    testimony: "#4b5563",
    arrowBackground: "#141414",
    arrowForeground: "#f1f1f7",
    arrowHoverBackground: "#5b47b0", // Using the site's purple theme
  };

  // Customize font sizes
  const customFontSizes = {
    name: "1.5rem",
    designation: "0.925rem",
    quote: "1.125rem",
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-section-heading">
          <h2>
            "Meet Your <span>Expert</span> Mentors"
          </h2>
        </div>
        <p className="testimonials-section-subtitle">
          Seasoned software developers with 5+ years of industry experience,
          passionately guiding you toward success.
        </p>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>Loading mentors...</p>
        </div>
      </section>
    );
  }

  if (!Array.isArray(mentors) || mentors.length === 0) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-section-heading">
          <h2>
            "Meet Your <span>Expert</span> Mentors"
          </h2>
        </div>
        <p className="testimonials-section-subtitle">
          Seasoned software developers with 5+ years of industry experience,
          passionately guiding you toward success.
        </p>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>No mentors available at the moment.</p>
        </div>
      </section>
    );
  }

  // Ensure we have valid testimonials before rendering
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-section-heading">
          <h2>
            "Meet Your <span>Expert</span> Mentors"
          </h2>
        </div>
        <p className="testimonials-section-subtitle">
          Seasoned software developers with 5+ years of industry experience,
          passionately guiding you toward success.
        </p>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>No mentors available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section" data-scroll-section>
      <div className="testimonials-section-heading">
        <h2 data-scroll data-scroll-speed="1">
          "Meet Your <span>Expert</span> Mentors"
        </h2>
      </div>
      <p className="testimonials-section-subtitle" data-scroll data-scroll-speed="1">
        Seasoned software developers with 5+ years of industry experience,
        passionately guiding you toward success.
      </p>
      <CircularTestimonials
        testimonials={testimonials}
        autoplay={true}
        colors={customColors}
        fontSizes={customFontSizes}
      />
    </section>
  );
};

export default CircularTestimonialsSection;

