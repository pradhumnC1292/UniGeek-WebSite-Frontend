import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import CurriculumOverview from "./../CurriculumOverview";
import CurriculumOverviewMob from "../CurriculumOverviewMob";

const ResponsiveComponentCurriculumOverview = () => {
  const { width } = useWindowDimensions();

  // For example, if width is less than 768px, render mobile version; otherwise, render desktop version.

  return width < 768 ? <CurriculumOverviewMob /> : <CurriculumOverview />;
};

export default ResponsiveComponentCurriculumOverview;
