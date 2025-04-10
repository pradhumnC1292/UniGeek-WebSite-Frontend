import React from "react";
import JavaCourseHeroSection from "../components/JavaCourseHeroSection";
import CourseUnigeekWay from "../components/CourseUnigeekWay";
import StatsBanner from "../components/StatsBanner";
import OurMentors from "../components/OurMentors";
import CurriculumOverview from "../components/CurriculumOverview";
import AfterEnrollingJourney from "../components/AfterEnrollingJourney";
import FAQ from "../components/FAQ";
import "./CoursePages.css";

const LevelupCourse = () => {
  return (
    <section className="course-page">
      <JavaCourseHeroSection />
      <StatsBanner />
      <CourseUnigeekWay />
      <OurMentors />
      <CurriculumOverview />
      <AfterEnrollingJourney />
      {/* price Card Component */}
      <FAQ />
    </section>
  );
};

export default LevelupCourse;
