import React from "react";
import { shallow } from "enzyme";
import CaseCountToggle from "../index";

describe("Tests for the CaseCountToggle component", () => {
  test("renders component", () => {
    shallow(<CaseCountToggle />);
  });
});
