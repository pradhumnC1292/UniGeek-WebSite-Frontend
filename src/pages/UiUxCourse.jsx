import React from "react";
import UIUXCourseHeroSection from "../components/UIUXCourseHeroSection";
import UIUXCourseUnigeekWay from "../components/UIUXCourseUnigeekWay";
import StatsBanner from "../components/StatsBanner";
import ResponsiveComponentOurMentors from "../components/responsiveComponents/ResponsiveComponentOurMentors";
import ResponsiveUiUxAfterEnrollingJourney from "../components/responsiveComponents/ResponsiveUiUxAfterEnrollingJourney";
import CoursePriceCards from "../components/CoursePriceCards";
import FAQ from "../components/FAQ";
import "./CoursePages.css";
import uiuxCardImg from "../assets/images/uiux-price-card-img.jpg";
import ResponsiveComponentCurriculumOverview from "../components/responsiveComponents/ResponsiveComponentCurriculumOverview";

const UiUxCourse = () => {
  const courseData = {
    cardImg: uiuxCardImg,
    title: "UI/UX Design Programm",
    price: "₹9,999",
    totalFees: "INR 49,999*",
    features: [
      "80+ Live Classes led by Industry Experts with 6+ Years Experience.",
      "Build 3+ Hands-on Projects through Interactive Live Workshops.",
      "1:1 Mentorship, Portfolio Review, and Personalized Guidance.",
      "Access Premium Design Resources & Developer Toolkits.",
      "Career Guidance, Resume Reviews & Interview Preparation.",
    ],
    recommended: false,
    buttonText: "Enroll Now",
  };
  return (
    <section className="course-page">
      <UIUXCourseHeroSection />
      <StatsBanner />
      <UIUXCourseUnigeekWay />
      <ResponsiveComponentOurMentors />
      <ResponsiveComponentCurriculumOverview />
      <ResponsiveUiUxAfterEnrollingJourney />
      <CoursePriceCards data={courseData} />
      <FAQ />
    </section>
  );
};

export default UiUxCourse;
