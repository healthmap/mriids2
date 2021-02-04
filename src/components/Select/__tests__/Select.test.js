import React from "react";
import { shallow } from "enzyme";
import Select from "../index";

test("renders component without crashing", () => {
  shallow(<Select optionsCurrent={["COVID 19"]} optionsPast={["Ebola Outbreak"]} />);
});
