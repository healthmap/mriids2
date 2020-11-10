import React from "react";
import { shallow } from "enzyme";
import { FirstPageContainer, SecondPageContainer, TeamMemberWrapper, Title, BodyText,  } from "../Team";

describe("Tests for Team components", () => {
  test("render FirstPageContainer", () => {
    shallow(<FirstPageContainer />);
  });
  test("render SecondPageContainer", () => {
    shallow(<SecondPageContainer />);
  });
  test("render TeamMemberWrapper", () => {
    shallow(<TeamMemberWrapper />);
  });
  test("render Title", () => {
    shallow(<Title />);
  });
  test("render BodyText", () => {
    shallow(<BodyText />);
  });
});



