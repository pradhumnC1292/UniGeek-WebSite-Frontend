import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import AfterEnrollingJourneyMob from "../AfterEnrollingJourneyMob";
import AfterEnrollingJourney from "../AfterEnrollingJourney";

const ResponsiveAfterEnrollingJourney = () => {
  const { width } = useWindowDimensions();
  return width <= 1024 ? (
    <AfterEnrollingJourneyMob />
  ) : (
    <AfterEnrollingJourney />
  );
};

export default ResponsiveAfterEnrollingJourney;
