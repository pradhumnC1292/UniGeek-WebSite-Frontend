import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import WhyDifferent_TM from "../WhyDifferent_TM";
import WhyDifferent_DL from "../WhyDifferent_DL";

const ResponsiveComponent = () => {
  const { width } = useWindowDimensions();

  // For example, if width is less than 768px, render mobile version; otherwise, render desktop version.
  return width < 1024 ? <WhyDifferent_TM /> : <WhyDifferent_DL />;
};

export default ResponsiveComponent;
