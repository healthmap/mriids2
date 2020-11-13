import React from "react";
import { shallow } from "enzyme";
import { MapContainer, EbolaRiskMapContainer } from "../MapContainer";

test("render MapContainer", () => {
  shallow(<MapContainer />);
});

test("render EbolaRiskMapContainer", () => {
  shallow(<EbolaRiskMapContainer />);
});
