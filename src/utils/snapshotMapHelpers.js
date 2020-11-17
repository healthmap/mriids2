export const getMaxValueForSnapshotLegend = (countryCaseCount) => {
  // Rounds up the highest value in the countryCaseCount and returns the max number for the case count map legend.
  const maxCaseCountValue = Math.max(...Object.values(countryCaseCount));
  let maxLegendValue;
  if (maxCaseCountValue < 20) {
    maxLegendValue = 20;
  } else if (maxCaseCountValue < 50) {
    maxLegendValue = 50;
  } else if (maxCaseCountValue < 500) {
    maxLegendValue = Math.ceil(maxCaseCountValue / 50) * 50;
  } else if (maxCaseCountValue < 1000) {
    maxLegendValue = Math.ceil(maxCaseCountValue / 100) * 100;
  } else if (maxCaseCountValue < 5000) {
    maxLegendValue = Math.ceil(maxCaseCountValue / 500) * 500;
  } else {
    maxLegendValue = Math.ceil(maxCaseCountValue / 1000) * 1000;
  }
  return maxLegendValue;
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
