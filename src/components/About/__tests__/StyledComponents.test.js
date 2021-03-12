import React from "react";
import { shallow } from "enzyme";
import * as Styled from "../styles";

describe("Tests for About styled components", () => {
  test("render Title", () => {
    shallow(<Styled.Title />);
  });
  test("render Body", () => {
    shallow(<Styled.Body />);
  });
});
