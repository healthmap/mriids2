import React from "react";
import { shallow } from "enzyme";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "../../../assets/sc-theme";
import { SnapshotMapContainer, EbolaRiskMapContainer } from "../MapContainers";

test("render SnapshotMapContainer", () => {
  shallow(<SnapshotMapContainer />);
});

test("render EbolaRiskMapContainer", () => {
  shallow(
    <StyledComponentsProvider theme={styledComponentsTheme}>
      <EbolaRiskMapContainer />
    </StyledComponentsProvider>
  );
});
