import { getEbolaCountriesCaseCounts } from "./ebolaDataHelpers";

export const getScale = (countryCaseCount) => {
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

export const getGeographyFillColor = (ebolaData, filters, geoProperties) => {
  const ebolaCountries = ["Guinea", "Liberia", "Sierra Leone"];
  const getFillColorForAllEbolaCountries =
    ebolaCountries.includes(geoProperties.NAME) &&
    filters.country === "All" &&
    filters.outbreak === "Ebola Outbreak";
  const getFillColorForSelectedCountry =
    filters.country !== "All" &&
    filters.outbreak === "Ebola Outbreak" &&
    filters.country === geoProperties.NAME;
  // Get the case count for the 3 ebolaCountries.
  const ebolaCountriesCaseCounts = getEbolaCountriesCaseCounts(
    ebolaData,
    filters
  );
  // Get the scale using the ebolaCountriesCaseCounts object.
  const scale = getScale(ebolaCountriesCaseCounts);
  const percentage = ebolaCountriesCaseCounts[geoProperties.NAME] / scale;
  // If projections are enabled, get the fillColor value using the getSnapshotProjectionsColor function.
  // Otherwise get the fillColor value using the getSnapshotColor function.
  const fillColor = filters.projection
    ? getSnapshotProjectionsColor(percentage)
    : getSnapshotColor(percentage);
  if (getFillColorForAllEbolaCountries) {
    // Returns the fillColor for all of the countries in the ebolaCountries array.
    return fillColor;
  } else if (getFillColorForSelectedCountry) {
    // Only returns the fill color for the country selected in filters.country.
    return fillColor;
  } else {
    // If the NAME of the geography is not in the ebolaCountries array, add the fill color below.
    return "#FCF1DD";
  }
};

export const getCountryToolTipContent = (ebolaData, filters, countryName) => {
  const ebolaCountriesCaseCounts = getEbolaCountriesCaseCounts(
    ebolaData,
    filters
  );
  const countryCaseCount = ebolaCountriesCaseCounts[countryName];
  // If the country has a case count, return the country name and case count.
  // Else, just return the country name.
  return countryCaseCount
    ? `${countryName} - ${countryCaseCount}`
    : countryName;
};
