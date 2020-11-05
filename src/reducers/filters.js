const initialState = {
  country: "All",
  outbreak: "Ebola Outbreak",
  view: "snapshot",
  projection: false,
  dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
};

const Filters = function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default Filters;
