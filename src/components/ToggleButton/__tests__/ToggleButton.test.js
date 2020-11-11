import React from "react";
import ToggleButton from "../index";
import { shallow } from "enzyme";

describe("Tests for the ToggleButton component", () => {
  test("renders ToggleButton component", () => {
    shallow(<ToggleButton />);
  });
});
