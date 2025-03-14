import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StatsBanner from "./components/StatsBanner";
import MentorBanner from "./components/MentorBanner";
import OurMentors from "./components/OurMentors";
import WhyDifferent_dl from "./components/WhyDifferent_DL";
import WhyDifferent02 from "./components/WhyDifferent02";
import CareerServices from "./components/CareerServices";
import CourseSection from "./components/CourseSection";
import HowToGetAdmission from "./components/HowToGetAdmission";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ResponsiveComponent from "./components/responsiveComponents/ResponsiveComponent";
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
      <HeroSection />
      <StatsBanner />
      <MentorBanner />
      <OurMentors />
      <ResponsiveComponent />
      <WhyDifferent02 />
      <CareerServices />
      <CourseSection />
      <HowToGetAdmission />
      <FAQ />
      <Footer />
    </div>
  );
}
