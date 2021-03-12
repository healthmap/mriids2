import React from "react";
import { shallow } from "enzyme";
import * as Styled from "../styles";

describe("Tests for MapLegendLevel styled components", () => {
  test("renders LevelWrapper", () => {
    shallow(<Styled.LevelWrapper />);
  });
  test("renders LevelColor", () => {
    shallow(<Styled.LevelColor />);
  });
  test("renders LevelValue", () => {
    shallow(<Styled.LevelValue />);
  });
});
