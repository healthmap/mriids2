import {
  getEbolaScale,
  getSnapshotColor,
  getSnapshotProjectionsColor,
  getEbolaFillColorsDictionary,
  getCountryFillColor,
} from "../snapshotMapHelpers";
import { reduxInitialState } from "../../constants/CommonTestData";
import {
  testRawEbolaData,
  ebolaFillColorDictionary,
  testGuineaFiltersState,
} from "../testData";

describe("Tests for getEbolaScale helper function", () => {
  test("returns scaleValue of 12000", () => {
    const countryCaseCounts = {
      Guinea: 2452,
      Liberia: 6738,
      "Sierra Leone": 11387,
    };
    expect(getEbolaScale(countryCaseCounts)).toEqual(12000);
  });
  test("returns scaleValue of 4500", () => {
    const countryCaseCounts = {
      Guinea: 0,
      Liberia: 0,
      "Sierra Leone": 4400,
    };
    expect(getEbolaScale(countryCaseCounts)).toEqual(4500);
  });
  test("returns scaleValue of 900", () => {
    const countryCaseCounts = {
      Guinea: 0,
      Liberia: 850,
      "Sierra Leone": 0,
    };
    expect(getEbolaScale(countryCaseCounts)).toEqual(900);
  });
  test("returns scaleValue of 450", () => {
    const countryCaseCounts = {
      Guinea: 430,
      Liberia: 0,
      "Sierra Leone": 0,
    };
    expect(getEbolaScale(countryCaseCounts)).toEqual(450);
  });
});

describe("Tests for getSnapshotColor", () => {
  test("returns the reddest color", () => {
    expect(getSnapshotColor(0.9)).toEqual("#E23D4A");
  });
  test("returns the middle red color", () => {
    expect(getSnapshotColor(0.45)).toEqual("#EE9187");
  });
});

describe("Tests for getSnapshotProjectionsColor", () => {
  test("returns the greenest color", () => {
    expect(getSnapshotProjectionsColor(0.9)).toEqual("#259994");
  });
  test("returns the middle red color", () => {
    expect(getSnapshotProjectionsColor(0.45)).toEqual("#36B9A7");
  });
});

describe("Tests for getEbolaFillColorsDictionary", () => {
  test("should return the ebola fill colors in the expected format", () => {
    expect(
      getEbolaFillColorsDictionary(testRawEbolaData, reduxInitialState.filters)
    ).toEqual(ebolaFillColorDictionary);
  });
});

describe("Tests for getCountryFillColor", () => {
  test("should return #F5BCA7 fill color for Guinea", () => {
    expect(
      getCountryFillColor(
        "Guinea",
        testGuineaFiltersState,
        ebolaFillColorDictionary
      )
    ).toEqual("#F5BCA7");
  });
  test("should return default #FCF1DD fill color since country is not in ebolaFillColorDictionary", () => {
    expect(
      getCountryFillColor(
        "Fake country",
        testGuineaFiltersState,
        ebolaFillColorDictionary
      )
    ).toEqual("#FCF1DD");
  });
});
