import React from "react";
import { shallow } from "enzyme";
import {
  SidebarCountParent,
  SidebarCountValue,
  SidebarCountLabel,
} from "../styles";

describe("tests for LayoutHelpers", () => {
  test("render SidebarCountParent", () => {
    shallow(<SidebarCountParent />);
  });
  test("render SidebarCountValue", () => {
    shallow(<SidebarCountValue />);
  });
  test("render SidebarCountLabel", () => {
    shallow(<SidebarCountLabel />);
  });
});
