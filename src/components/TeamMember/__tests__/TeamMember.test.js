import React from "react";
import { shallow } from "enzyme";
import TeamMember from "../index";

test("render TeamMember", () => {
  shallow(<TeamMember content="sangeeta" />);
});

