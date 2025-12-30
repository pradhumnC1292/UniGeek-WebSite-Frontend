import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import CircularTestimonialsSection from "../CircularTestimonialsSection";

const ResponsiveComponentCircularTestimonials = () => {
  const { width } = useWindowDimensions();

  // The CircularTestimonialsSection component is already responsive
  // We can use this wrapper for any additional responsive logic if needed
  return <CircularTestimonialsSection />;
};

export default ResponsiveComponentCircularTestimonials;

