import React from "react";
import { shallow } from "enzyme";
import { ZoomButton, ZoomButtons } from "../ZoomButtons";

describe("tests for ZoomButtons", () => {
  test("render ZoomButton", () => {
    shallow(<ZoomButton />);
  });
  test("render ZoomButtons", () => {
    shallow(<ZoomButtons />);
  });
});
