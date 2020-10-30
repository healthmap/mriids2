import React from "react";
import Map from "../index"
import {shallow} from "enzyme"

test('renders component without crashing', () => {
    shallow(<Map />);
});
