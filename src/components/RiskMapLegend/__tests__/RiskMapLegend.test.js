import React from "react";
import { shallow } from "enzyme";
import RiskMapLegend from "../index";
import { BlockDropshadow } from "../../styled-components/Block";

describe("Tests for RiskMapLegend component", () => {
  test("renders component", () => {
    shallow(<RiskMapLegend />);
  });
  test("BlockDropshadow has 6 child components (1 title and 5 levels)", () => {
    const wrapper = shallow(<RiskMapLegend />);
    expect(wrapper.find(BlockDropshadow).children()).toHaveLength(6);
  });
});
