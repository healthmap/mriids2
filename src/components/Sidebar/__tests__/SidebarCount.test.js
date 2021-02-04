import React from "react";
import { shallow } from "enzyme";
import SidebarCount from "../SidebarCount";
import { reduxInitialState } from "../../../constants/CommonTestData";

const filtersState = reduxInitialState.filters;

describe("Tests for the SidebarCount component", () => {
  test("renders SidebarCount component", () => {
    shallow(<SidebarCount filters={filtersState} diseaseCaseCount={5000} />);
  });
});
