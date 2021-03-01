import React from "react";
import { connect } from "react-redux";
import {
  MapPopupContainer,
  MapPopupTitleContainer,
  MapPopupCountSection,
  MapPopupSummary,
  Label,
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
      <MapPopupTitleContainer>{countryName}</MapPopupTitleContainer>
      {countryTotalDiseaseCount ? (
        <>
          <MapPopupCountSection>
            <Label>Total {dataType}</Label>
            <p>{countryTotalDiseaseCount.toLocaleString()}</p>
          </MapPopupCountSection>
          <MapPopupSummary>
            Total {dataType} from {dateRange.from.toDateString()} to{" "}
            {dateRange.to.toDateString()}
          </MapPopupSummary>
        </>
      ) : (
        <MapPopupSummary>
          {dataType === "deaths" ? "Death" : "Case"} count data for this country
          is not available.
        </MapPopupSummary>
      )}
    </MapPopupContainer>
  );
};

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
  dataType: state.filters.dataType,
});

export default connect(mapStateToProps)(SnapshotMapCountryPopup);
