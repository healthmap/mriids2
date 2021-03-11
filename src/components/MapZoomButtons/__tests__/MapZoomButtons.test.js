import React from "react";
import { shallow } from "enzyme";
import MapZoomButtons from "../index";
import { ZoomButtons } from "../styles";

describe("Tests for MapZoomButtons component", () => {
  test("component renders", () => {
    shallow(<MapZoomButtons />);
  });
  test("renders 2 ZoomButton children components", () => {
    const wrapper = shallow(<MapZoomButtons />);
    expect(wrapper.find(ZoomButtons).children()).toHaveLength(2);
  });
});
