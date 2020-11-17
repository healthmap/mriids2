import React from "react";
import { shallow } from "enzyme";
import { CaseCountToggleWrapper } from "../CaseCountToggle";

test("renders CaseCountToggleWrapper component", () => {
  shallow(<CaseCountToggleWrapper>Content</CaseCountToggleWrapper>);
});
