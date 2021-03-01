export const reduxInitialState = {
  ebola: {
    ebolaData: {
      isFetching: 0,
      data: {},
      error: {},
    },
    ebolaDataCombined: {
      isFetching: 0,
      data: {},
      error: {},
    },
    riskData: {
      isFetching: 0,
      data: {},
      error: {},
    },
  },
  covid: {
    caseCounts: {
      isFetching: 0,
      data: [],
      error: {},
    },
    deathCounts: {
      isFetching: 0,
      data: [],
      error: {},
    },
    projections: {
      isFetching: 0,
      data: [],
      error: {},
    },
  },
  filters: {
    country: "All",
    outbreak: "Ebola Outbreak",
    dataType: "cases",
    dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
  },
  ui: {
    dateSliderRange: [0, 72],
    isDateRangePopoverOpen: false,
    popoverAnchorElement: null,
    isProjectionsPopupOpen: false,
    hasConfirmedProjectionsPopup: false,
  },
};
