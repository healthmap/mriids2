import { ebolaOutbreakCountries, allCountries } from "../constants/Countries";
import { getCountriesCovidCounts } from "./covidDataHelpers";
import { getCountriesEbolaCaseCounts } from "./ebolaDataHelpers";

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
  if (maxCaseCountValue < 1000) {
    scaleValue = Math.ceil(maxCaseCountValue / 100) * 100;
  } else if (maxCaseCountValue < 5000) {
    scaleValue = Math.ceil(maxCaseCountValue / 500) * 500;
  } else if (maxCaseCountValue < 10000) {
    scaleValue = Math.ceil(maxCaseCountValue / 1000) * 1000;
  } else if (maxCaseCountValue < 20000) {
    scaleValue = Math.ceil(maxCaseCountValue / 2000) * 2000;
  } else if (maxCaseCountValue < 50000) {
    scaleValue = Math.ceil(maxCaseCountValue / 5000) * 5000;
  } else if (maxCaseCountValue < 100000) {
    scaleValue = Math.ceil(maxCaseCountValue / 10000) * 10000;
  } else if (maxCaseCountValue < 500000) {
    scaleValue = Math.ceil(maxCaseCountValue / 50000) * 50000;
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

export const getSnapshotColor = (caseCountValue = 0) => {
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

export const getSnapshotDeathsColor = (caseCountValue = 0) => {
  //  Gets the color values for the snapshot map and case count legend.
  //  This is for non-projection data.
  let color;
  if (caseCountValue === 0) {
    color = "#FDF1DD";
  } else if (caseCountValue > 0 && caseCountValue <= 0.1) {
    color = "#EFDCDF";
  } else if (caseCountValue > 0.1 && caseCountValue <= 0.2) {
    color = "#E1C7E0";
  } else if (caseCountValue > 0.2 && caseCountValue <= 0.3) {
    color = "#D4B4E1";
  } else if (caseCountValue > 0.3 && caseCountValue <= 0.4) {
    color = "#C49FE3";
  } else if (caseCountValue > 0.4 && caseCountValue <= 0.5) {
    color = "#B48CE1";
  } else if (caseCountValue > 0.5 && caseCountValue <= 0.6) {
    color = "#A178E3";
  } else if (caseCountValue > 0.6 && caseCountValue <= 0.7) {
    color = "#8E65E3";
  } else if (caseCountValue > 0.7 && caseCountValue <= 0.8) {
    color = "#7951E2";
  } else if (caseCountValue > 0.8) {
    color = "#613DE3";
  }
  return color;
};

export const getSnapshotProjectionsColor = (caseCountValue = 0) => {
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
export const getEbolaFillColorsDictionary = (
  ebolaCountriesCaseCounts,
  dataType
) => {
  let colorsDictionary = {};
  // Get the scale using the ebolaCountriesCaseCounts object.
  const scale = getEbolaScale(ebolaCountriesCaseCounts);
  ebolaOutbreakCountries.forEach((country) => {
    const percentage = ebolaCountriesCaseCounts[country] / scale;
    // If projections are enabled, get the fillColor value using the getSnapshotProjectionsColor function.
    // Otherwise get the fillColor value using the getSnapshotColor function.
    colorsDictionary[country] =
      dataType === "projected cases"
        ? getSnapshotProjectionsColor(percentage)
        : getSnapshotColor(percentage);
  });
  return colorsDictionary;
};

// This gets a dictionary with key/value pairs of country/fillColor for each country.
export const getCovidFillColorsDictionary = (
  covidCountriesCaseCounts,
  dataType
) => {
  let colorsDictionary = {};
  // Get the scale using the covidCountriesCaseCounts object.
  const scale = getCovidScale(covidCountriesCaseCounts);
  allCountries.forEach((country) => {
    const percentage = covidCountriesCaseCounts[country] / scale;
    // If projections are enabled, get the fillColor value using the getSnapshotProjectionsColor function.
    // If viewing death counts, get the fillColor using the getSnapshotDeathsColor function.
    // If viewing case counts, get the fillColor using the getSnapshotColor function.
    if (dataType === "projected deaths") {
      colorsDictionary[country] = getSnapshotProjectionsColor(percentage);
    } else if (dataType === "cases") {
      colorsDictionary[country] = getSnapshotColor(percentage);
    } else if (dataType === "deaths") {
      colorsDictionary[country] = getSnapshotDeathsColor(percentage);
    }
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

export const getCountryDiseaseCountDictionary = (
  ebolaData,
  covidCaseCountData,
  covidDeathCountData,
  filters
) => {
  // If the ebola outbreak is selected, return a dictionary of all ebola outbreak countries with the ebola case counts.
  if (filters.outbreak === "Ebola Outbreak") {
    return getCountriesEbolaCaseCounts(ebolaData, filters);
    // If the covid outbreak is selected and the data type is "cases", return a dictionary of all countries with the covid case counts.
  } else if (filters.outbreak === "COVID 19" && filters.dataType === "cases") {
    return getCountriesCovidCounts(covidCaseCountData, filters);
    // If the covid outbreak is selected and the data type is "deaths", return a dictionary of all countries with the covid death counts.
  } else if (filters.outbreak === "COVID 19" && filters.dataType === "deaths") {
    return getCountriesCovidCounts(covidDeathCountData, filters);
    //  If none of the above conditions are true, return an empty object for now.
    //  This is a placeholder while we decide how to display the covid "cases and deaths".
  } else {
    return {};
  }
};
