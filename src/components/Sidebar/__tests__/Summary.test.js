import React from "react";
import { shallow } from "enzyme";
import Summary from "../Summary";

const filtersState = {
  country: "All",
  outbreak: "Ebola Outbreak",
  view: "snapshot",
  projection: false,
  dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
};

describe("Tests for the Summary component", () => {
  test("renders Summary component", () => {
    shallow(
      <Summary
        dateRange={filtersState.dateRange}
        projection={filtersState.projection}
        country={filtersState.country}
        diseaseCaseCount={5000}
      />
    );
  });
});
