import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { reduxInitialState } from "../../../constants/CommonTestData";
import { ebolaCaseCountsDictionary } from "../../../utils/testData/ebolaTestData";
import SnapshotMapCaseCountLegend from "../index";

const mockStore = configureStore([thunk]);

describe("Tests for the connected SnapshotMapCaseCountLegend component with reduxInitialState", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(reduxInitialState);

    component = renderer.create(
      <Provider store={store}>
        <SnapshotMapCaseCountLegend
          countryDiseaseCounts={ebolaCaseCountsDictionary}
        />
      </Provider>
    );
  });
  test("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
