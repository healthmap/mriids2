import React from "react";
import { shallow } from "enzyme";
import { Title, Body } from "../About";

describe("Tests for About components", () => {
  test("render Title", () => {
    shallow(<Title />);
  });
  test("render Body", () => {
    shallow(<Body />);
  });
});
