import React from "react";
import { shallow } from "enzyme";
import {
  MapLegendWrapperSnapshot,
  MapLegendWrapperRisk,
  MapLegendItemsWrapper,
} from "../MapLegendWrappers";

describe("Tests for the MapLegendWrappers styled components", () => {
  test("renders MapLegendWrapperSnapshot", () => {
    shallow(<MapLegendWrapperSnapshot />);
  });
  test("renders MapLegendWrapperRisk", () => {
    shallow(<MapLegendWrapperRisk />);
  });
  test("renders MapLegendItemsWrapper", () => {
    shallow(<MapLegendItemsWrapper />);
  });
});
