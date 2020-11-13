import { getMaxValueForSnapshotLegend } from "../snapshotMapHelpers";

describe("Tests for getMaxValueForSnapshotLegend helper function", () => {
  test("returns maxLegendValue of 12000", () => {
    const countryCaseCounts = {
      Guinea: 2452,
      Liberia: 6738,
      "Sierra Leone": 11387,
    };
    expect(getMaxValueForSnapshotLegend(countryCaseCounts)).toEqual(12000);
  });
  test("returns maxLegendValue of 4500", () => {
    const countryCaseCounts = {
      Guinea: 0,
      Liberia: 0,
      "Sierra Leone": 4400,
    };
    expect(getMaxValueForSnapshotLegend(countryCaseCounts)).toEqual(4500);
  });
  test("returns maxLegendValue of 900", () => {
    const countryCaseCounts = {
      Guinea: 0,
      Liberia: 850,
      "Sierra Leone": 0,
    };
    expect(getMaxValueForSnapshotLegend(countryCaseCounts)).toEqual(900);
  });
  test("returns maxLegendValue of 450", () => {
    const countryCaseCounts = {
      Guinea: 430,
      Liberia: 0,
      "Sierra Leone": 0,
    };
    expect(getMaxValueForSnapshotLegend(countryCaseCounts)).toEqual(450);
  });
});
