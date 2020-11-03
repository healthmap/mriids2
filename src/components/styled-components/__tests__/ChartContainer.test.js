import React from "react";
import { shallow } from "enzyme";
import { ChartContainer } from "../ChartContainer";

test("render ChartContainer", () => {
  shallow(<ChartContainer />);
});
