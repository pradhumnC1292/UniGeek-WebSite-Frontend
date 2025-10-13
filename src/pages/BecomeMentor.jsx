import React from "react";
import BecomeMentorHeroSec from "../components/BecomeMentorHeroSec";
import BecomeMentorBanner from "../components/BecomeMentorBanner";
import ContributeSection from "../components/ContributeSection";
import StepsToJoin from "../components/StepsToJoin";
import "./BecomeMentor.css";
import FAQ from "../components/FAQ";

const BecomeMentor = () => {
  return (
    <section className="mentor-page">
      <BecomeMentorHeroSec />
      <BecomeMentorBanner />
      <StepsToJoin />
      <ContributeSection />
      <FAQ />
    </section>
  );
};

export default BecomeMentor;
