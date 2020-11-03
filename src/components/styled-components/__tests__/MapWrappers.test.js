import React from "react";
import { shallow } from "enzyme";
import {
  MapFiltersWrapper,
  MapInnerWrapper,
  MapLegendItemsWrapper,
  MapLegendWrapper,
  MapLegendWrapperSnapshot,
  MapOuterWrapper,
} from "../MapWrappers";

describe("tests for MapWrappers", () => {
  test("render MapOuterWrapper", () => {
    shallow(<MapOuterWrapper />);
  });
  test("render MapInnerWrapper", () => {
    shallow(<MapInnerWrapper />);
  });
  test("render MapFiltersWrapper", () => {
    shallow(<MapFiltersWrapper />);
  });
  test("render MapLegendItemsWrapper", () => {
    shallow(<MapLegendItemsWrapper />);
  });
  test("render MapLegendWrapper", () => {
    shallow(<MapLegendWrapper />);
  });
  test("render MapLegendWrapperSnapshot", () => {
    shallow(<MapLegendWrapperSnapshot />);
  });
});
