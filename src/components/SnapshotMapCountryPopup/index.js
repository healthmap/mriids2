import React from "react";
import { connect } from "react-redux";
import { getCountryDiseaseCountForPopup } from "../../utils/snapshotMapHelpers";
import * as Styled from "./styles";

const SnapshotMapCountryPopup = ({
  countryName,
  countriesDiseaseCountsDictionary,
  dateRange,
  dataType = "cases",
  outbreakSelected,
}) => {
  const countryTotalDiseaseCount = getCountryDiseaseCountForPopup(
    outbreakSelected,
    countryName,
    countriesDiseaseCountsDictionary,
    "totalCount"
  );
  const countryPer100kDiseaseCount = getCountryDiseaseCountForPopup(
    outbreakSelected,
    countryName,
    countriesDiseaseCountsDictionary,
    "per100kCount"
  );

  return (
    <Styled.MapPopupContainer>
      <Styled.MapPopupTitleContainer>
        {countryName}
      </Styled.MapPopupTitleContainer>
      {countryTotalDiseaseCount ? (
        <>
          {outbreakSelected === "COVID 19" && (
            <Styled.MapPopupCountSection>
              <Styled.Label>{dataType} per 100k</Styled.Label>
              <p>{countryPer100kDiseaseCount.toLocaleString()}</p>
            </Styled.MapPopupCountSection>
          )}
          <Styled.MapPopupCountSection>
            <Styled.Label>Total {dataType}</Styled.Label>
            <p>{countryTotalDiseaseCount.toLocaleString()}</p>
          </Styled.MapPopupCountSection>
          <Styled.MapPopupSummary>
            Total {dataType} from {dateRange.from.toDateString()} to{" "}
            {dateRange.to.toDateString()}
          </Styled.MapPopupSummary>
        </>
      ) : (
        <Styled.MapPopupSummary>
          {dataType === "deaths" ? "Death" : "Case"} count data for this country
          is not available.
        </Styled.MapPopupSummary>
      )}
    </Styled.MapPopupContainer>
  );
};

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
  dataType: state.filters.dataType,
  outbreakSelected: state.filters.outbreak,
});

export default connect(mapStateToProps)(SnapshotMapCountryPopup);
