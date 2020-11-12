import React from "react";
import SnapshotMap from "../index";
import { shallow } from "enzyme";

test("renders SnapshotMap component without crashing", () => {
  shallow(<SnapshotMap />);
});
