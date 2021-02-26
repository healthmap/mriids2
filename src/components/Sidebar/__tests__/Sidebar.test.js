import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Sidebar from "../index";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import styledComponentsTheme from "../../../assets/sc-theme";
import { reduxInitialState } from "../../../constants/CommonTestData";

const mockStore = configureStore([thunk]);

const riskDataFiltersState = {
  ...reduxInitialState,
  filters: {
    ...reduxInitialState.filters,
    dataType: "risk",
  },
};

describe("Tests for the connected Sidebar component with reduxInitialState", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(reduxInitialState);

    component = renderer.create(
      <StyledComponentsProvider theme={styledComponentsTheme}>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </StyledComponentsProvider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Tests for the connected Sidebar component with riskDataFiltersState", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(riskDataFiltersState);

    component = renderer.create(
      <StyledComponentsProvider theme={styledComponentsTheme}>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </StyledComponentsProvider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
