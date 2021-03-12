import React from "react";
import { shallow } from "enzyme";
import * as Styled from "../styles";

describe("tests for SidebarCount styled components", () => {
  test("render SidebarCountParent", () => {
    shallow(<Styled.SidebarCountParent />);
  });
  test("render SidebarCountValue", () => {
    shallow(<Styled.SidebarCountValue />);
  });
  test("render SidebarCountLabel", () => {
    shallow(<Styled.SidebarCountLabel />);
  });
});
