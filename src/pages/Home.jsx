import React from "react";
import HeroSection from "../components/HeroSection";
import StatsBanner from "../components/StatsBanner";
import MentorBanner from "../components/MentorBanner";
import DashboardStats from "../components/DashboardStats";
import ResponsiveComponentOurMentors from "../components/responsiveComponents/ResponsiveComponentOurMentors";
import ResponsiveComponent from "../components/responsiveComponents/ResponsiveComponent";
import CareerServicesResponsive from "../components/responsiveComponents/CareerServicesResponsive ";
import CourseSection from "../components/CourseSection";
import HowToGetAdmissionResponsiveComponent from "../components/responsiveComponents/HowToGetAdmissionResponsiveComponent";
import FAQ from "../components/FAQ";
import "./Home.css";
// import ResponsiveComponentWhyDifferentMob02 from "../components/responsiveComponents/ResponsiveComponentWhyDifferentMob02";
import WhyWerDiffrent from "../components/WhyWerDiffrent";
import { MarqueeDemo } from "../components/MarqueeSection";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <StatsBanner />
      {/* <MentorBanner /> */}
      <DashboardStats />
      <MarqueeDemo />
      <ResponsiveComponentOurMentors />
      <ResponsiveComponent />
      <WhyWerDiffrent />
      {/* <WhyWerDiffrentResponsive /> */}
      {/* <ResponsiveComponentWhyDifferentMob02 /> */}
      <CareerServicesResponsive />
      <CourseSection />
      <HowToGetAdmissionResponsiveComponent />
      <FAQ />
    </div>
  );
};

export default Home;
