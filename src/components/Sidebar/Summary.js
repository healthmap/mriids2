import React from "react";
import { BlockPadded } from "../styled-components/Block";

const Summary = ({
  dateRange,
  country,
  diseaseCaseCount = 0,
  projection = false,
}) => {
  const locationName = country === "All" ? "West Africa" : country;
  return (
    <BlockPadded>
      <h4>SUMMARY</h4>
      <p>
        From {dateRange.from.toDateString()} to {dateRange.to.toDateString()},
        the Ebola outbreak in {locationName}{" "}
        {projection ? "is projected to affect" : "has affected"}{" "}
        {diseaseCaseCount} people
        {!projection && " (suspected and confirmed cases)"}.
      </p>
    </BlockPadded>
  );
};

export default Summary;
