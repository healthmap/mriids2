import React from "react";
import { shallow } from "enzyme";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "../../../assets/sc-theme";
import {
  FirstPageContainer,
  SecondPageContainer,
  TeamMemberWrapper,
  Title,
  BodyLarge,
} from "../Team";

describe("Tests for Team components", () => {
  test("render FirstPageContainer", () => {
    shallow(
      <StyledComponentsProvider theme={styledComponentsTheme}>
        <FirstPageContainer />
      </StyledComponentsProvider>
    );
  });
  test("render SecondPageContainer", () => {
    shallow(<SecondPageContainer />);
  });
  test("render TeamMemberWrapper", () => {
    shallow(<TeamMemberWrapper />);
  });
  test("render Title", () => {
    shallow(<Title />);
  });
  test("render BodyLarge", () => {
    shallow(<BodyLarge />);
  });
});
