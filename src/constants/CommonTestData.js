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
  filters: {
    country: "All",
    outbreak: "Ebola Outbreak",
    view: "snapshot",
    projection: false,
    dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
  },
};
