import React from "react";
import { shallow } from "enzyme";
import { StyledBlockDropshadow, StyledBlockPadded } from "../StyledBlocks";

describe("Tests for styled blocks components", () => {
  test("render StyledBlockPadded", () => {
    shallow(<StyledBlockPadded />);
  });
  test("render StyledBlockDropshadow", () => {
    shallow(<StyledBlockDropshadow />);
  });
});
