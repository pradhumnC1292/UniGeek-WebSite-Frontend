import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import OurMentorsMobile from "../OurMentorsMobile";
import OurMentors from "../OurMentors";

const ResponsiveComponentOurMentors = () => {
  const { width } = useWindowDimensions();

  // For example, if width is less than 768px, render mobile version; otherwise, render desktop version.

  return width < 768 ? <OurMentorsMobile /> : <OurMentors />;
};

export default ResponsiveComponentOurMentors;
