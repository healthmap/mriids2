import React from "react";
import { shallow } from "enzyme";
import Header from "../index";
import Logo from "../../Logo";
import * as Styled from "../styles";

test("renders component without crashing", () => {
  shallow(<Header />);
});

test("renders Logo child component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.containsMatchingElement(<Logo />)).toBe(true);
});

test("renders HeaderNavWrapper child component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.containsMatchingElement(Styled.HeaderNavWrapper)).toBe(true);
});

test("renders 2 nav buttons", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(Styled.HeaderNavWrapper).children()).toHaveLength(3);
});
