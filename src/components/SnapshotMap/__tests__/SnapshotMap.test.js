import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { reduxInitialState } from "../../../constants/CommonTestData";
import SnapshotMap from "../index";

const mockStore = configureStore([thunk]);

describe("Tests for the connected SnapshotMap component with reduxInitialState", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(reduxInitialState);

    component = renderer.create(
      <Provider store={store}>
        <SnapshotMap />
      </Provider>
    );
  });
  test("SnapshotMap component should have 5 child components", () => {
    expect(component.toJSON().children).toHaveLength(5);
  });
});
