import React from "react";
import { shallow } from "enzyme";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "../../../assets/sc-theme";
import * as Styled from "../styles";

describe("Tests for Team styled components", () => {
  test("render FirstPageContainer", () => {
    shallow(
      <StyledComponentsProvider theme={styledComponentsTheme}>
        <Styled.FirstPageContainer />
      </StyledComponentsProvider>
    );
  });
  test("render SecondPageContainer", () => {
    shallow(<Styled.SecondPageContainer />);
  });
  test("render TeamMemberWrapper", () => {
    shallow(<Styled.TeamMemberWrapper />);
  });
  test("render Title", () => {
    shallow(<Styled.Title />);
  });
  test("render BodyLarge", () => {
    shallow(<Styled.BodyLarge />);
  });
});
