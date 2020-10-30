import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("renders component without crashing", () => {
  shallow(<App />);
});
