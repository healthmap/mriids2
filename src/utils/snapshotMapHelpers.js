import { getEbolaCountriesCaseCounts } from "./ebolaDataHelpers";
import { getCountriesCovidCaseCounts } from "./covidDataHelpers";
import { ebolaOutbreakCountries, allCountries } from "../constants/Countries";

export const getEbolaScale = (countryCaseCount) => {
  // Gets the scaleValue to be used by the snapshotMap and map legend.
  const maxCaseCountValue = Math.max(...Object.values(countryCaseCount));
  let scaleValue;
  if (maxCaseCountValue < 20) {
    scaleValue = 20;
  } else if (maxCaseCountValue < 50) {
    scaleValue = 50;
  } else if (maxCaseCountValue < 500) {
    scaleValue = Math.ceil(maxCaseCountValue / 50) * 50;
  } else if (maxCaseCountValue < 1000) {
    scaleValue = Math.ceil(maxCaseCountValue / 100) * 100;
  } else if (maxCaseCountValue < 5000) {
    scaleValue = Math.ceil(maxCaseCountValue / 500) * 500;
  } else {
    scaleValue = Math.ceil(maxCaseCountValue / 1000) * 1000;
  }
  return scaleValue;
};

export const getCovidScale = (countryCaseCount) => {
  // Gets the scaleValue to be used by the snapshotMap and map legend.
  const maxCaseCountValue = Math.max(...Object.values(countryCaseCount));
  let scaleValue;
  if (maxCaseCountValue < 100000) {
    scaleValue = 100000;
  } else if (maxCaseCountValue < 500000) {
    scaleValue = 500000;
  } else if (maxCaseCountValue < 1000000) {
    scaleValue = Math.ceil(maxCaseCountValue / 100000) * 100000;
  } else if (maxCaseCountValue < 5000000) {
    scaleValue = Math.ceil(maxCaseCountValue / 500000) * 500000;
  } else if (maxCaseCountValue < 10000000) {
    scaleValue = Math.ceil(maxCaseCountValue / 1000000) * 1000000;
  } else {
    scaleValue = Math.ceil(maxCaseCountValue / 2000000) * 2000000;
  }
  return scaleValue;
};

export const getSnapshotColor = (caseCountValue) => {
  //  Gets the color values for the snapshot map and case count legend.
  //  This is for non-projection data.
  let color;
  if (caseCountValue === 0) {
    color = "#FDF1DD";
  } else if (caseCountValue > 0 && caseCountValue <= 0.1) {
    color = "#FBE7C6";
  } else if (caseCountValue > 0.1 && caseCountValue <= 0.2) {
    color = "#F8D1B6";
  } else if (caseCountValue > 0.2 && caseCountValue <= 0.3) {
    color = "#F5BCA7";
  } else if (caseCountValue > 0.3 && caseCountValue <= 0.4) {
    color = "#F1A697";
  } else if (caseCountValue > 0.4 && caseCountValue <= 0.5) {
    color = "#EE9187";
  } else if (caseCountValue > 0.5 && caseCountValue <= 0.6) {
    color = "#EB7C77";
  } else if (caseCountValue > 0.6 && caseCountValue <= 0.7) {
    color = "#E86769";
  } else if (caseCountValue > 0.7 && caseCountValue <= 0.8) {
    color = "#E55259";
  } else if (caseCountValue > 0.8) {
    color = "#E23D4A";
  }
  return color;
};

export const getSnapshotProjectionsColor = (caseCountValue) => {
  //  Gets the color values for the snapshot map and case count legend.
  //  This is for projection data.
  let color;
  if (caseCountValue === 0) {
    color = "#FDF1DD";
  } else if (caseCountValue > 0 && caseCountValue <= 0.1) {
    color = "#D3E6D2";
  } else if (caseCountValue > 0.1 && caseCountValue <= 0.2) {
    color = "#AADBC7";
  } else if (caseCountValue > 0.2 && caseCountValue <= 0.3) {
    color = "#83CFBC";
  } else if (caseCountValue > 0.3 && caseCountValue <= 0.4) {
    color = "#5BC4B2";
  } else if (caseCountValue > 0.4 && caseCountValue <= 0.5) {
    color = "#36B9A7";
  } else if (caseCountValue > 0.5 && caseCountValue <= 0.6) {
    color = "#32B1A2";
  } else if (caseCountValue > 0.6 && caseCountValue <= 0.7) {
    color = "#2DAA9E";
  } else if (caseCountValue > 0.7 && caseCountValue <= 0.8) {
    color = "#29A199";
  } else if (caseCountValue > 0.8) {
    color = "#259994";
  }
  return color;
};

// This gets a dictionary with key/value pairs of country/fillColor for each Ebola country.
export const getEbolaFillColorsDictionary = (ebolaData, filters) => {
  let colorsDictionary = {};
  // Get the case count for the 3 ebolaOutbreakCountries.
  const ebolaCountriesCaseCounts = getEbolaCountriesCaseCounts(
    ebolaData,
    filters
  );
  // Get the scale using the ebolaCountriesCaseCounts object.
  const scale = getEbolaScale(ebolaCountriesCaseCounts);
  ebolaOutbreakCountries.forEach((country) => {
    const percentage = ebolaCountriesCaseCounts[country] / scale;
    // If projections are enabled, get the fillColor value using the getSnapshotProjectionsColor function.
    // Otherwise get the fillColor value using the getSnapshotColor function.
    colorsDictionary[country] = filters.projection
      ? getSnapshotProjectionsColor(percentage)
      : getSnapshotColor(percentage);
  });
  return colorsDictionary;
};

// This gets a dictionary with key/value pairs of country/fillColor for each country.
export const getCovidFillColorsDictionary = (covidData, filters) => {
  let colorsDictionary = {};
  // Get the covid case count for all countries.
  const covidCountriesCaseCounts = getCountriesCovidCaseCounts(
    covidData,
    filters
  );
  // Get the scale using the covidCountriesCaseCounts object.
  const scale = getCovidScale(covidCountriesCaseCounts);
  allCountries.forEach((country) => {
    const percentage = covidCountriesCaseCounts[country] / scale;
    // If projections are enabled, get the fillColor value using the getSnapshotProjectionsColor function.
    // Otherwise get the fillColor value using the getSnapshotColor function.
    colorsDictionary[country] = filters.projection
      ? getSnapshotProjectionsColor(percentage)
      : getSnapshotColor(percentage);
  });
  return colorsDictionary;
};

export const getCountryFillColor = (
  countryName,
  filters,
  fillColorDictionary
) => {
  // If 'All' countries are selected, return the fillColor for each country that has one. Otherwise, return "#FCF1DD".
  if (filters.country === "All") {
    return fillColorDictionary[countryName]
      ? fillColorDictionary[countryName]
      : "#FCF1DD";
  } else {
    // If a specific country is selected, only return the fillColor for the selected country. For all other countries, return "#FCF1DD".
    return countryName === filters.country
      ? fillColorDictionary[countryName]
      : "#FCF1DD";
  }
};

export const getCountryToolTipContent = (diseaseData, filters, countryName) => {
  let countryCaseCount;
  if (filters.outbreak === "Ebola Outbreak") {
    const ebolaCountriesCaseCounts = getEbolaCountriesCaseCounts(
      diseaseData,
      filters
    );
    countryCaseCount = ebolaCountriesCaseCounts[countryName];
  } else {
    const covidCountriesCaseCounts = getCountriesCovidCaseCounts(
      diseaseData,
      filters
    );
    countryCaseCount = covidCountriesCaseCounts[countryName];
  }
  // If the country has a case count, return the country name and case count.
  // Else, just return the country name.
  return countryCaseCount
    ? `${countryName} - ${countryCaseCount.toLocaleString()}`
    : countryName;
};
