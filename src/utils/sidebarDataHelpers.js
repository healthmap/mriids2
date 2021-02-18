import { getCovidCount } from "./covidDataHelpers";
import { getEbolaCaseCount } from "./ebolaDataHelpers";

// Returns the case or death counts for the selected outbreak to be displayed in the SidebarCount component.
export const getDiseaseCount = (
  ebolaData,
  covidCaseCountData,
  covidDeathCountData,
  filters
) => {
  // If the Ebola outbreak is selected, return the ebola case count.
  if (filters.outbreak === "Ebola Outbreak") {
    return getEbolaCaseCount(ebolaData, filters);
    // If the Covid outbreak is selected and the dataType is "cases", return the covid case count.
  } else if (filters.outbreak === "COVID 19" && filters.dataType === "cases") {
    return getCovidCount(covidCaseCountData, filters);
    // If the Covid outbreak is selected and the dataType is "deaths", return the covid death count.
  } else if (filters.outbreak === "COVID 19" && filters.dataType === "deaths") {
    return getCovidCount(covidDeathCountData, filters);
    //  If none of the conditions above are true, just return 0.
  } else {
    return 0;
  }
};
