import React from "react";
import { shallow } from "enzyme";
import * as Styled from "../styles";

describe("Tests for the MapLegendWrappers styled components", () => {
  test("renders MapLegendWrapper", () => {
    shallow(<Styled.MapLegendWrapper />);
  });
  test("renders MapLegendItemsWrapper", () => {
    shallow(<Styled.MapLegendItemsWrapper />);
  });
});
