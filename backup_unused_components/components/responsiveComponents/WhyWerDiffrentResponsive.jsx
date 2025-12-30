import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import WhyWerDiffrent_Mob from "../WhyWerDiffrent_Mob";
import WhyWerDiffrent from "../WhyWerDiffrent";

const WhyWerDiffrentResponsive = () => {
  const { width } = useWindowDimensions();
  return width < 768 ? <WhyWerDiffrent_Mob /> : <WhyWerDiffrent />;
};

export default WhyWerDiffrentResponsive;
