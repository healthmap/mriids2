import React from "react";
import { shallow } from "enzyme";
import Sidebar from "../index";

test("renders component without crashing", () => {
  shallow(<Sidebar />);
});
