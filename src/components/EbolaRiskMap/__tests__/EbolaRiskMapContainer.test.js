import React from "react";
import { shallow } from "enzyme";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "../../../assets/sc-theme";
import { EbolaRiskMapContainer } from "../styles";

test("render EbolaRiskMapContainer", () => {
  shallow(
    <StyledComponentsProvider theme={styledComponentsTheme}>
      <EbolaRiskMapContainer />
    </StyledComponentsProvider>
  );
});
