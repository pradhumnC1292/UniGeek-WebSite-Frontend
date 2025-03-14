import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import WhyDifferent_Mob from "../WhyDifferent_Mob";
import WhyDifferent_TM from "../WhyDifferent_TM";
import WhyDifferent_DL from "../WhyDifferent_DL";

const ResponsiveComponent = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return <WhyDifferent_Mob />;
  } else if (width < 1024) {
    return <WhyDifferent_TM />;
  } else {
    return <WhyDifferent_DL />;
  }
};

export default ResponsiveComponent;
