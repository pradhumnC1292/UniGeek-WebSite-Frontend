import React, { useRef, useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS
import Navbar from "./components/NavBar";
// import EdtechNavbar from "./components/EdtechNavbar";
import HeroSection from "./components/HeroSection";
import StatsBanner from "./components/StatsBanner";
import MentorBanner from "./components/MentorBanner";
// import Different from "./components/Different";
import WhyDifferent02 from "./components/WhyDifferent02";
import CareerServices from "./components/CareerServices";
import CourseSection from "./components/CourseSection";
import HowToGetAdmission from "./components/HowToGetAdmission";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ResponsiveComponent from "./components/responsiveComponents/ResponsiveComponent";
import ResponsiveComponentOurMentors from "./components/responsiveComponents/ResponsiveComponentOurMentors";
import CareerServicesResponsive from "./components/responsiveComponents/CareerServicesResponsive ";
// import "./App.css"; // If you have any global styles

export default function App() {
  // const scrollRef = useRef(null); // Reference to the main scroll container

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     lerp: 0.08,
  //     multiplier: 1,
  //   });
  //   scroll.update();
  //   // Cleanup on unmount
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    <div
      className="app"
      // data-scroll-container
      // ref={scrollRef}
      // ^ This is crucial for Locomotive Scroll to work
    >
      <Navbar />
      {/* <EdtechNavbar /> */}
      <HeroSection />
      <StatsBanner />
      <MentorBanner />
      <ResponsiveComponentOurMentors />
      <ResponsiveComponent />
      {/* <Different /> */}
      <WhyDifferent02 />
      <CareerServicesResponsive />
      <CourseSection />
      <HowToGetAdmission />
      <FAQ />
      <Footer />
    </div>
  );
}
