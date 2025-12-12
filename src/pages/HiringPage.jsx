import React from "react";
import "./HringPage.css";
import HiringPageHeroSec from "../components/HiringPageHeroSec";
import StatsBanner from "../components/StatsBanner";
import WhyHireFromUs from "../components/WhyHireFromUs";
import HireProcess from "../components/HireProcess";
import HireProfiles from "../components/HireProfiles";
import HireTestimonials from "../components/HireTestimonials";
import FAQ from "../components/FAQ";

const HiringPage = () => {
  return (
    <section className="hiring-page">
      <HiringPageHeroSec />
      {/* <StatsBanner /> */}
      <WhyHireFromUs />
      <HireProcess />
      <HireProfiles />
      <HireTestimonials />
      <FAQ />
    </section>
  );
};

export default HiringPage;
