import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Sidebar from "../index";
import renderer from "react-test-renderer";
import "jest-styled-components";

const mockStore = configureStore([thunk]);

describe("Tests for the connected Sidebar component", () => {
  let store;
  let component;

  const initialState = {
    ebola: {
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
    },
    filters: {
      country: "All",
      outbreak: "Ebola Outbreak",
      view: "snapshot",
      projection: false,
      dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);

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
