import {
  getEbolaScale,
  getCovidScale,
  getSnapshotColor,
  getSnapshotDeathsColor,
  getSnapshotProjectionsColor,
  getEbolaFillColorsDictionary,
  getCovidFillColorsDictionary,
  getCountryFillColor,
  getCountryDiseaseCountDictionary,
  getLegendTitle,
} from "../snapshotMapHelpers";
import { reduxInitialState } from "../../constants/CommonTestData";
import {
  ebolaFillColorDictionary,
  testGuineaFiltersState,
  ebolaCaseCountsDictionary,
  allCountriesEbolaData,
} from "../testData/ebolaTestData";
import {
  covidAllCountriesFilters,
  covidCaseCountsDictionary,
  testTwoCountryCovidCaseCounts,
  testTwoCountryCovidDeathCounts,
} from "../testData/covidTestData";

describe("Tests for getEbolaScale helper function", () => {
  test("returns scaleValue of 12000", () => {
    expect(getEbolaScale(ebolaCaseCountsDictionary)).toEqual(12000);
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

describe("Tests for getCovidScale", () => {
  test("should return 900", () => {
    const countryCaseCounts = { Afghanistan: 900, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(900);
  });
  test("should return 5000", () => {
    const countryCaseCounts = { Afghanistan: 4900, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(5000);
  });
  test("should return 10000", () => {
    const countryCaseCounts = { Afghanistan: 9900, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(10000);
  });
  test("should return 20000", () => {
    const countryCaseCounts = { Afghanistan: 19900, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(20000);
  });
  test("should return 50000", () => {
    const countryCaseCounts = { Afghanistan: 46000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(50000);
  });
  test("should return 100000", () => {
    const countryCaseCounts = { Afghanistan: 99000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(100000);
  });
  test("should return 500000", () => {
    const countryCaseCounts = { Afghanistan: 499000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(500000);
  });
  test("should return 1000000", () => {
    const countryCaseCounts = { Afghanistan: 999000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(1000000);
  });
  test("should return 5000000", () => {
    const countryCaseCounts = { Afghanistan: 4990000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(5000000);
  });
  test("should return 10000000", () => {
    const countryCaseCounts = { Afghanistan: 9990000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(10000000);
  });
  test("should return 20000000", () => {
    const countryCaseCounts = { Afghanistan: 20000000, Zimbabwe: 0 };
    expect(getCovidScale(countryCaseCounts)).toBe(20000000);
  });
});

describe("Tests for getSnapshotColor", () => {
  test("should return the reddest color", () => {
    expect(getSnapshotColor(0.9)).toEqual("#E23D4A");
  });
  test("should return the middle red color", () => {
    expect(getSnapshotColor(0.45)).toEqual("#EE9187");
  });
  test("should return the lightest color", () => {
    expect(getSnapshotColor(0)).toEqual("#FDF1DD");
  });
});

describe("Tests for getSnapshotDeathsColor", () => {
  test("should return the brightest purple color", () => {
    expect(getSnapshotDeathsColor(0.9)).toEqual("#613DE3");
  });
  test("should return the middle purple color", () => {
    expect(getSnapshotDeathsColor(0.45)).toEqual("#B48CE1");
  });
  test("should return the lightest color", () => {
    expect(getSnapshotDeathsColor(0)).toEqual("#FDF1DD");
  });
});

describe("Tests for getSnapshotProjectionsColor", () => {
  test("returns the greenest color", () => {
    expect(getSnapshotProjectionsColor(0.9)).toEqual("#259994");
  });
  test("returns the middle red color", () => {
    expect(getSnapshotProjectionsColor(0.45)).toEqual("#36B9A7");
  });
  test("should return the lightest color", () => {
    expect(getSnapshotProjectionsColor(0)).toEqual("#FDF1DD");
  });
});

describe("Tests for getEbolaFillColorsDictionary", () => {
  test("should return the ebola fill colors in the expected format", () => {
    expect(
      getEbolaFillColorsDictionary(ebolaCaseCountsDictionary, "cases")
    ).toEqual(ebolaFillColorDictionary);
  });
});

describe("Tests for getCovidFillColorsDictionary", () => {
  const fillColorsDictionary = getCovidFillColorsDictionary(
    covidCaseCountsDictionary,
    "cases"
  );
  test("Afghanistan should have a fill color of '#F1A697'", () => {
    // Should have this color because Afghanistan has a case count of 38.
    expect(fillColorsDictionary.Afghanistan).toEqual("#F1A697");
  });
  test("United States of America should have the default '#FDF1DD' color", () => {
    // Should have this color because USA has a case count of 0.
    expect(fillColorsDictionary["United States of America"]).toEqual("#FDF1DD");
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

describe("Tests for the getCountryDiseaseCountDictionary helper function", () => {
  test("should return countries ebola case count dictionary", () => {
    expect(
      getCountryDiseaseCountDictionary(
        allCountriesEbolaData,
        testTwoCountryCovidCaseCounts,
        testTwoCountryCovidDeathCounts,
        reduxInitialState.filters
      )
    ).toEqual({
      Guinea: 126,
      Liberia: 126,
      "Sierra Leone": 126,
    });
  });
  test("should return a dictionary with the Afghanistan case counts", () => {
    const countriesCovidCaseCountDictionary = getCountryDiseaseCountDictionary(
      allCountriesEbolaData,
      testTwoCountryCovidCaseCounts,
      testTwoCountryCovidDeathCounts,
      covidAllCountriesFilters
    );
    // 1. Check if countriesCovidCaseCountDictionary has an "Afghanistan" key.
    const objectKeysArray = Object.keys(countriesCovidCaseCountDictionary);
    expect(objectKeysArray).toContain("Afghanistan");
    // 2. Check if the "Afghanistan" key has a value of 38.
    expect(countriesCovidCaseCountDictionary["Afghanistan"]).toEqual(38);
  });
  test("should return a dictionary with the Afghanistan death counts", () => {
    const covidDeathsFilters = {
      ...covidAllCountriesFilters,
      dataType: "deaths",
    };
    const countriesCovidCaseCountDictionary = getCountryDiseaseCountDictionary(
      allCountriesEbolaData,
      testTwoCountryCovidCaseCounts,
      testTwoCountryCovidDeathCounts,
      covidDeathsFilters
    );
    // 1. Check if countriesCovidCaseCountDictionary has an "Afghanistan" key.
    const objectKeysArray = Object.keys(countriesCovidCaseCountDictionary);
    expect(objectKeysArray).toContain("Afghanistan");
    // 2. Check if the "Afghanistan" key has a value of 16.
    expect(countriesCovidCaseCountDictionary["Afghanistan"]).toEqual(16);
  });
  test("should return empty dictionary", () => {
    const covidCasesAndDeathsFilters = {
      ...covidAllCountriesFilters,
      dataType: "cases and deaths",
    };
    expect(
      getCountryDiseaseCountDictionary(
        allCountriesEbolaData,
        testTwoCountryCovidCaseCounts,
        testTwoCountryCovidDeathCounts,
        covidCasesAndDeathsFilters
      )
    ).toEqual({});
  });
});

describe("Tests for getLegendTitle helper function", () => {
  test("should return 'Total outbreak projections'", () => {
    expect(getLegendTitle("Ebola Outbreak", "projected cases")).toEqual(
      "Total outbreak projections"
    );
  });
  test("should return 'Case counts'", () => {
    expect(getLegendTitle("Ebola Outbreak", "cases")).toEqual("Case counts");
  });
  test("should return 'Cases per 100k'", () => {
    expect(getLegendTitle("COVID 19", "cases")).toEqual("Cases per 100k");
  });
  test("should return 'Deaths per 100k'", () => {
    expect(getLegendTitle("COVID 19", "deaths")).toEqual("Deaths per 100k");
  });
});
