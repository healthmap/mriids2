import React from "react";
import { shallow } from "enzyme";
import { Button, ButtonIcon, ButtonLink } from "../Button";

describe("Tests for Button components", () => {
  test("render Button", () => {
    shallow(<Button />);
  });
  test("render ButtonIcon", () => {
    shallow(<ButtonIcon />);
  });
  test("render ButtonLink", () => {
    shallow(<ButtonLink />);
  });
});
