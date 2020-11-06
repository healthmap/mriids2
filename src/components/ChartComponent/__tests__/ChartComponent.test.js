import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import ChartComponent from "../index";
import renderer from "react-test-renderer";
import "jest-styled-components";

const mockStore = configureStore([thunk]);

describe("Tests for the connected ChartComponent", () => {
  let store;
  let component;

  const initialState = {
    filters: {
      country: "All",
      outbreak: "Ebola Outbreak",
      view: "snapshot",
      projection: false,
      dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
    },
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
  };

  beforeEach(() => {
    store = mockStore(initialState);

    component = renderer.create(
      <Provider store={store}>
        <ChartComponent />
      </Provider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
