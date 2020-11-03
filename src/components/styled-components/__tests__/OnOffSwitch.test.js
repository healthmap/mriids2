import React from "react";
import { shallow } from "enzyme";
import { OnOffSwitch } from "../OnOffSwitch";

test("render OnOffSwitch", () => {
  shallow(<OnOffSwitch />);
});
