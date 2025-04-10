import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import HowToGetAdmissionMob from "../HowToGetAdmissionMob";
import HowToGetAdmission from "../HowToGetAdmission";

const HowToGetAdmissionResponsiveComponent = () => {
  const { width } = useWindowDimensions();

  if (width <= 820) {
    return <HowToGetAdmissionMob />;
  } else {
    return <HowToGetAdmission />;
  }
};

export default HowToGetAdmissionResponsiveComponent;
