import React from "react";
import { shallow } from "enzyme";
import Select from "../index";

test("renders component without crashing", () => {
  shallow(<Select options={["All", "Guinea", "Liberia", "Sierra Leone"]} />);
});
