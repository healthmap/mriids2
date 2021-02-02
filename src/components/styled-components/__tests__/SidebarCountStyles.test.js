import React from "react";
import { shallow } from "enzyme";
import {
  SidebarCountParent,
  SidebarCountColor,
  SidebarCountValue,
  SidebarCountLabel,
} from "../SidebarCountStyles";

describe("tests for LayoutHelpers", () => {
  test("render SidebarCountParent", () => {
    shallow(<SidebarCountParent />);
  });
  test("render SidebarCountColor", () => {
    shallow(<SidebarCountColor />);
  });
  test("render SidebarCountValue", () => {
    shallow(<SidebarCountValue />);
  });
  test("render SidebarCountLabel", () => {
    shallow(<SidebarCountLabel />);
  });
});
