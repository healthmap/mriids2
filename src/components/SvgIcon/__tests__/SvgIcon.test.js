import React from "react";
import { shallow } from "enzyme";
import SvgIcon from "../index";

describe("Tests for the SvgIcon component", () => {
  test("renders show case count icon", () => {
    shallow(<SvgIcon icon="Show" size="20" title="Show Count" />);
  });
});
