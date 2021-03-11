import React from "react";
import { shallow } from "enzyme";
import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
} from "../MapLegendWrappers";

describe("Tests for the MapLegendWrappers styled components", () => {
  test("renders MapLegendWrapperSnapshot", () => {
    shallow(<MapLegendWrapperSnapshot />);
  });
  test("renders MapLegendItemsWrapper", () => {
    shallow(<MapLegendItemsWrapper />);
  });
});
