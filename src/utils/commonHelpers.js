export const getValidCountryNameValue = (countryName) => {
  switch (countryName) {
    case "USA":
      return "United States of America";
    case "UK":
      return "United Kingdom";
    case "Libyan Arab Jamahiriya":
      return "Libya";
    case "Syrian Arab Republic":
      return "Syria";
    case "S. Korea":
      return "South Korea";
    default:
      return countryName;
  }
};
