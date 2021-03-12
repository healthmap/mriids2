import React from "react";
import { shallow } from "enzyme";
import * as Styled from "../styles";

describe("tests for ZoomButtons", () => {
  test("render ZoomButton", () => {
    shallow(<Styled.ZoomButton />);
  });
  test("render ZoomButtons", () => {
    shallow(<Styled.ZoomButtons />);
  });
});
