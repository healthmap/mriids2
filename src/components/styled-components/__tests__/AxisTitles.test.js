import React from "react";
import { shallow } from "enzyme";
import { AxisXTitle, AxisYTitle } from "../AxisTitles";

describe("Tests for AxisTitles components", () => {
  test("render AxisXTitle", () => {
    shallow(<AxisXTitle />);
  });
  test("render AxisYTitle", () => {
    shallow(<AxisYTitle position="left" />);
  });
});
