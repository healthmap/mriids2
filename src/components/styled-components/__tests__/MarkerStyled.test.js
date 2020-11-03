import React from "react";
import { shallow } from "enzyme";
import { MarkerStyled } from "../MarkerStyled";

test("render MarkerStyled", () => {
  shallow(<MarkerStyled longitude={8.555216} latitude={-11.322184} />);
});
