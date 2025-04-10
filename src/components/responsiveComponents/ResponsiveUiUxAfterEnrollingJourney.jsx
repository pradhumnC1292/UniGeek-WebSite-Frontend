import React from "react";
import useWindowDimensions from "../useWindowDimensions";
import UiUxAfterEnrollingJourneyMob from "../UiUxAfterEnrollingJourneyMob";
import UiUxAfterEnrollingJourney from "./../UiUxAfterEnrollingJourney";

const ResponsiveUiUxAfterEnrollingJourney = () => {
  const { width } = useWindowDimensions();
  return width < 768 ? (
    <UiUxAfterEnrollingJourneyMob />
  ) : (
    <UiUxAfterEnrollingJourney />
  );
};

export default ResponsiveUiUxAfterEnrollingJourney;
