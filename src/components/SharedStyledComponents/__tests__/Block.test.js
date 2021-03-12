import React from "react";
import { shallow } from "enzyme";
import { BlockDropshadow, BlockPadded } from "../Block";

describe("Tests for Block components", () => {
  test("render BlockPadded", () => {
    shallow(<BlockPadded />);
  });
  test("render BlockDropshadow", () => {
    shallow(<BlockDropshadow />);
  });
});
