import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import CareerServicesMobile from "../CareerServicesMobile";
import CareerServices from "../CareerServices";

const CareerServicesResponsive = () => {
  const { width } = useWindowDimensions();
  return width < 768 ? <CareerServicesMobile /> : <CareerServices />;
};

export default CareerServicesResponsive;
