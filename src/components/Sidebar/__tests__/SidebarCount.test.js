import React from "react";
import { shallow } from "enzyme";
import SidebarCount from "../SidebarCount";

const filtersState = {
  country: "All",
  outbreak: "Ebola Outbreak",
  view: "snapshot",
  projection: false,
  dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
};

describe("Tests for the SidebarCount component", () => {
  test("renders SidebarCount component", () => {
    shallow(
      <SidebarCount
        dateRange={filtersState.dateRange}
        projection={filtersState.projection}
        diseaseCaseCount={5000}
      />
    );
  });
});
