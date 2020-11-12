import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import "jest-styled-components";
import DateRange from "../index";
import { reduxInitialState } from "../../../constants/CommonTestData";

const mockStore = configureStore([thunk]);

describe("Tests for the connected DateRange", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(reduxInitialState);

    component = renderer.create(
      <Provider store={store}>
        <DateRange />
      </Provider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
