import {
  getScale,
  getSnapshotColor,
  getSnapshotProjectionsColor,
} from "../snapshotMapHelpers";

describe("Tests for getMaxValueForSnapshotLegend helper function", () => {
  test("returns maxLegendValue of 12000", () => {
    const countryCaseCounts = {
      Guinea: 2452,
      Liberia: 6738,
      "Sierra Leone": 11387,
    };
    expect(getScale(countryCaseCounts)).toEqual(12000);
  });
  test("returns maxLegendValue of 4500", () => {
    const countryCaseCounts = {
      Guinea: 0,
      Liberia: 0,
      "Sierra Leone": 4400,
    };
    expect(getScale(countryCaseCounts)).toEqual(4500);
  });
  test("returns maxLegendValue of 900", () => {
    const countryCaseCounts = {
      Guinea: 0,
      Liberia: 850,
      "Sierra Leone": 0,
    };
    expect(getScale(countryCaseCounts)).toEqual(900);
  });
  test("returns maxLegendValue of 450", () => {
    const countryCaseCounts = {
      Guinea: 430,
      Liberia: 0,
      "Sierra Leone": 0,
    };
    expect(getScale(countryCaseCounts)).toEqual(450);
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
