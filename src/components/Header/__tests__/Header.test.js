import React from "react";
import { shallow } from "enzyme";
import Header from "../index";

test("renders component without crashing", () => {
  shallow(<Header />);
});
