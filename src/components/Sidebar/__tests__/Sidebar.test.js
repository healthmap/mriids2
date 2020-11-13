import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Sidebar from "../index";
import renderer from "react-test-renderer";
import "jest-styled-components";
import {
  reduxInitialState,
  riskViewState,
} from "../../../constants/CommonTestData";

const mockStore = configureStore([thunk]);

describe("Tests for the connected Sidebar component with reduxInitialState", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(reduxInitialState);

    component = renderer.create(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Tests for the connected Sidebar component with riskViewState", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(riskViewState);

    component = renderer.create(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
