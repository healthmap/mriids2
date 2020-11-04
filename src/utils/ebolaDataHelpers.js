export const prepareEbolaData = (csvData) => {
  const countries = ["Guinea", "Liberia", "Sierra Leone"];
  const keys = ["y"];
  const projections = ["oneWeek", "twoWeeks", "threeWeeks", "fourWeeks"];
  const projectionsMapping = {
    oneWeek: 1,
    twoWeeks: 2,
    threeWeeks: 3,
    fourWeeks: 4,
  };

  let newData = {};

  countries.forEach((country) => {
    newData[country] = {};
    csvData.forEach((row) => {
      newData[country][row.projection_from] = {};
      newData[country][row.projection_from].projections = {};
      projections.forEach((projection) => {
        newData[country][row.projection_from].projections[projection] = {};
        newData[country][
          row.projection_from
        ].projections.originalValue = parseFloat(row[country]);
        keys.forEach((key) => {
          newData[country][row.projection_from].projections[
            projection
          ] = parseFloat(
            row[`${key}${projectionsMapping[projection]}.${country}`]
          );
        });
      });
      newData[country][row.projection_from].value = row[country];
    });
  });
  return newData;
};
