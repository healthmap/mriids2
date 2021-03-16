import React from "react";
import EbolaRiskMap from "../index";
import { shallow } from "enzyme";

test("renders EbolaRiskMap component without crashing", () => {
  shallow(<EbolaRiskMap />);
});
