import React from "react";
import "./HringPage.css";
import HiringPageHeroSec from "../components/HiringPageHeroSec";
import WhyHireFromUs from "../components/WhyHireFromUs";
import HireProfiles from "../components/HireProfiles";
import FAQ from "../components/FAQ";

const HiringPage = () => {
  return (
    <section className="hiring-page">
      <HiringPageHeroSec />
      <WhyHireFromUs />
      <HireProfiles />
      <FAQ />
    </section>
  );
};

export default HiringPage;
