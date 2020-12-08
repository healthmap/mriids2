import React from "react";
import { shallow } from "enzyme";
import { SnapshotMapContainer, EbolaRiskMapContainer } from "../MapContainers";

test("render SnapshotMapContainer", () => {
  shallow(<SnapshotMapContainer />);
});

test("render EbolaRiskMapContainer", () => {
  shallow(<EbolaRiskMapContainer />);
});
