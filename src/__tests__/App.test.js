import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import App from "../App";

const mockStore = configureStore([thunk]);

describe("Tests for the App component", () => {
  let store;
  let component;

  const initialState = {
    ebolaData: {
      isFetching: 0,
      data: {},
      error: {},
    },
    ebolaDataCombined: {
      isFetching: 0,
      data: {},
      error: {},
    },
    riskData: {
      isFetching: 0,
      data: {},
      error: {},
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
