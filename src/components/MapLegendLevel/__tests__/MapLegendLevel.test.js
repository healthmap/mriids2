import React from "react";
import { shallow } from "enzyme";
import MapLegendLevel from "../index";

describe("Tests for MapLegendLevel component", () => {
  test("renders MapLegendLevel component", () => {
    shallow(<MapLegendLevel />);
  });
});
