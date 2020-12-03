export const getValidCountryNameValue = (countryName) => {
  switch (countryName) {
    case "USA":
      return "United States of America";
    case "UK":
      return "United Kingdom";
    default:
      return countryName;
  }
};
