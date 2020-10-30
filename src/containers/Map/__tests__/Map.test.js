import React from "react";
import Map from "../index"
import {render} from "@testing-library/react";

test('renders component without crashing', () => {
    render(<Map />);
});
