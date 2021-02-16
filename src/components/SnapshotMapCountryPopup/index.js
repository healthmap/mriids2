import React from "react";
import { connect } from "react-redux";
import {
  MapPopupContainer,
  MapPopupTitleContainer,
  MapPopupCountSection,
} from "./styles";

const SnapshotMapCountryPopup = ({
  countryName,
  diseaseCaseCountsDictionary,
  dateRange,
  dataType = "cases",
}) => {
  const countryTotalDiseaseCount = diseaseCaseCountsDictionary[countryName];
  return (
    <MapPopupContainer>
      <MapPopupTitleContainer>
        <h2>{countryName}</h2>
      </MapPopupTitleContainer>
      {countryTotalDiseaseCount ? (
        <MapPopupCountSection>
          <p>TOTAL {dataType.toUpperCase()} </p>
          <p>{countryTotalDiseaseCount.toLocaleString()}</p>
        </MapPopupCountSection>
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
    </MapPopupContainer>
  );
};

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
  dataType: state.filters.dataType,
});

export default connect(mapStateToProps)(SnapshotMapCountryPopup);
