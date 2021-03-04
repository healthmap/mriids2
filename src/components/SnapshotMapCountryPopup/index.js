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
  outbreakSelected,
}) => {
  const countryTotalDiseaseCount =
    outbreakSelected === "Ebola Outbreak"
      ? diseaseCaseCountsDictionary[countryName]
      : diseaseCaseCountsDictionary[countryName].totalCount;
  const countryPer100kDiseaseCount =
    outbreakSelected === "COVID 19"
      ? diseaseCaseCountsDictionary[countryName].per100kCount
      : 0;

  return (
    <MapPopupContainer>
      <MapPopupTitleContainer>{countryName}</MapPopupTitleContainer>
      {countryTotalDiseaseCount ? (
        <>
          {outbreakSelected === "COVID 19" && (
            <MapPopupCountSection>
              <Label>{dataType} per 100k</Label>
              <p>{countryPer100kDiseaseCount.toLocaleString()}</p>
            </MapPopupCountSection>
          )}
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
  outbreakSelected: state.filters.outbreak,
});

export default connect(mapStateToProps)(SnapshotMapCountryPopup);
