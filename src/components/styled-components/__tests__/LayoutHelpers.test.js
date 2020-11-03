import React from "react";
import { shallow } from "enzyme";
import { FlexColumn, FlexRow } from "../LayoutHelpers";

describe("tests for LayoutHelpers", () => {
  test("render FlexRow", () => {
    shallow(<FlexRow />);
  });
  test("render FlexColumn", () => {
    shallow(<FlexColumn />);
  });
});
