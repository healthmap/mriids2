import React from "react";
import { shallow } from "enzyme";
import {
  ReportedCasesParent,
  ReportedCasesColor,
  ReportedCasesValue,
  ReportedCasesLabel,
} from "../ReportedCasesStyles";

describe("tests for LayoutHelpers", () => {
  test("render ReportedCasesParent", () => {
    shallow(<ReportedCasesParent />);
  });
  test("render ReportedCasesColor", () => {
    shallow(<ReportedCasesColor />);
  });
  test("render ReportedCasesValue", () => {
    shallow(<ReportedCasesValue />);
  });
  test("render ReportedCasesLabel", () => {
    shallow(<ReportedCasesLabel />);
  });
});
