import React from "react";
import { shallow } from "enzyme";
import { Team } from "../Team";

test("render Team", () => {
  shallow(<Team />);
});
