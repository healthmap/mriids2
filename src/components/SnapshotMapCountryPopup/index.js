import React from "react";
import { connect } from "react-redux";

const SnapshotMapCountryPopup = ({
  countryName,
  diseaseCaseCountsDictionary,
  dateRange,
  dataType = "cases",
}) => {
  const countryTotalDiseaseCount = diseaseCaseCountsDictionary[countryName];
  return (
    <div>
      <h2>{countryName}</h2>
      {countryTotalDiseaseCount ? (
        <p>
          TOTAL {dataType.toUpperCase()}{" "}
          {countryTotalDiseaseCount.toLocaleString()}
        </p>
      ) : (
        <p>
          We currently do not have total{" "}
          {dataType === "deaths" ? "death" : "case"} count data for this
          country.
        </p>
      )}
      <p>
        Total {dataType} from {dateRange.from.toDateString()} to{" "}
        {dateRange.to.toDateString()}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
  dataType: state.filters.dataType,
});

export default connect(mapStateToProps)(SnapshotMapCountryPopup);
