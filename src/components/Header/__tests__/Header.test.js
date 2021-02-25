import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../index";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { reduxInitialState } from "../../../constants/CommonTestData";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

const mockStore = configureStore([thunk]);

describe("Tests for the connected Header", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(reduxInitialState);

    component = renderer.create(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
