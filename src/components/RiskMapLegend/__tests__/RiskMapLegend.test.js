import React from "react";
import { shallow } from "enzyme";
import RiskMapLegend from "../index";
import { StyledBlockDropshadow } from "../../SharedStyledComponents/StyledBlocks";

describe("Tests for RiskMapLegend component", () => {
  test("renders component", () => {
    shallow(<RiskMapLegend />);
  });
  test("StyledBlockDropshadow has 6 child components (1 title and 5 levels)", () => {
    const wrapper = shallow(<RiskMapLegend />);
    expect(wrapper.find(StyledBlockDropshadow).children()).toHaveLength(6);
  });
});
