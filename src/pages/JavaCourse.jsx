import React from "react";
import JavaCourseHeroSection from "../components/JavaCourseHeroSection";
import CourseUnigeekWay from "../components/CourseUnigeekWay";
import StatsBanner from "../components/StatsBanner";
import ResponsiveComponentOurMentors from "../components/responsiveComponents/ResponsiveComponentOurMentors";
import CoursePriceCards from "../components/CoursePriceCards";
import FAQ from "../components/FAQ";
import "./CoursePages.css";
import cardImg from "../assets/images/priceCard-img.png";
import ResponsiveComponentCurriculumOverview from "../components/responsiveComponents/ResponsiveComponentCurriculumOverview";
import ResponsiveAfterEnrollingJourney from "./../components/responsiveComponents/ResponsiveAfterEnrollingJourney";

const JavaCourse = () => {
  const courseData = {
    cardImg: cardImg,
    title: "Java Full-Stack Programm",
    price: "₹6,999",
    totalFees: "INR 69,999*",
    features: [
      "220+ Live Classes, Doubt support from 5+ Years Experienced Experts.",
      "3+ major production ready Projects & 300+ coding problems.",
      "Unlimited mock interviews and Profile building support.",
      "100% placement support service.",
      "Limited seats — we prioritize quality over quantity.",
    ],
    recommended: true,
    buttonText: "Enroll Now",
  };
  return (
    <section className="course-page">
      <JavaCourseHeroSection />
      <StatsBanner />
      <CourseUnigeekWay />
      <ResponsiveComponentOurMentors />
      <ResponsiveComponentCurriculumOverview />
      <ResponsiveAfterEnrollingJourney />
      <CoursePriceCards data={courseData} />
      <FAQ />
    </section>
  );
};

export default JavaCourse;
