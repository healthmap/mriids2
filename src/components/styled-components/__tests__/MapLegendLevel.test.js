import React from "react";
import { shallow } from "enzyme";
import { LevelWrapper, LevelColor, LevelValue } from "../MapLegendLevel";

describe("Tests for MapLegendLevel styled components", () => {
  test("renders LevelWrapper", () => {
    shallow(<LevelWrapper />);
  });
  test("renders LevelColor", () => {
    shallow(<LevelColor />);
  });
  test("renders LevelValue", () => {
    shallow(<LevelValue />);
  });
});
