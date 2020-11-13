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
