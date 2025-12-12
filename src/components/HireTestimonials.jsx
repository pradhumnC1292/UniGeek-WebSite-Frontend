import React from "react";
import "./HireTestimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const HireTestimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Prokopi provided us with exceptional talent. The candidates were not just technically skilled but also ready to contribute from day one. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "InnovateLabs",
      role: "Hiring Manager",
      content: "The quality of candidates from Prokopi exceeded our expectations. The zero-cost hiring model is a game-changer for startups like us.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Digital Solutions",
      role: "Founder",
      content: "We've hired multiple developers through Prokopi. Each one has been a valuable addition to our team. The process is smooth and efficient.",
      rating: 5,
    },
  ];

  return (
    <section className="hire-testimonials-section" data-scroll-section>
      <div className="hire-testimonials-container">
        <h2 className="hire-testimonials-heading">
          What <span>Companies Say</span>
        </h2>
        <p className="hire-testimonials-subheading">
          Don't just take our word for it — hear from companies that have hired from Prokopi.
        </p>

        <div className="hire-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="hire-testimonial-card">
              <div className="hire-testimonial-quote">
                <FaQuoteLeft />
              </div>
              <div className="hire-testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="hire-testimonial-star" />
                ))}
              </div>
              <p className="hire-testimonial-content">{testimonial.content}</p>
              <div className="hire-testimonial-author">
                <div className="hire-testimonial-author-info">
                  <h4 className="hire-testimonial-author-name">{testimonial.name}</h4>
                  <p className="hire-testimonial-author-role">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireTestimonials;

