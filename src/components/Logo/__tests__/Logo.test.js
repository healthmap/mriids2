import React from "react";
import { shallow } from "enzyme";
import Logo from "../index";

test("renders component without crashing", () => {
  shallow(<Logo />);
});
