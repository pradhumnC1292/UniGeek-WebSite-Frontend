import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import WhyDifferentMob02 from "../WhyDifferentMob02";
import WhyDifferent02 from "./../WhyDifferent02";

const ResponsiveComponentWhyDifferentMob02 = () => {
  const { width } = useWindowDimensions();

  // For example, if width is less than 768px, render mobile version; otherwise, render desktop version.

  return width < 768 ? <WhyDifferentMob02 /> : <WhyDifferent02 />;
};

export default ResponsiveComponentWhyDifferentMob02;
