import React from "react";
import { shallow } from "enzyme";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "../../../assets/sc-theme";
import * as Styled from "../styles";

test("render EbolaRiskMapContainer", () => {
  shallow(
    <StyledComponentsProvider theme={styledComponentsTheme}>
      <Styled.EbolaRiskMapContainer />
    </StyledComponentsProvider>
  );
});
