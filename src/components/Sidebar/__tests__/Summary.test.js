import React from "react";
import { shallow } from "enzyme";
import Summary from "../Summary";
import { reduxInitialState } from "../../../constants/CommonTestData";

const filtersState = reduxInitialState.filters;

describe("Tests for the Summary component", () => {
  test("renders Summary component", () => {
    shallow(
      <Summary
        dateRange={filtersState.dateRange}
        dataType={filtersState.dataType}
        country={filtersState.country}
        diseaseCaseCount={5000}
      />
    );
  });
});
