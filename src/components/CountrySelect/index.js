import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import { StyledInputLabel } from "../SharedStyledComponents/StyledInputLabel";
import {
  ebolaOutbreakCountries,
  allCountries,
} from "../../constants/Countries";
import { changeCountryFilter } from "../../actions/filters";
import * as Styled from "./styles";

const CountrySelect = ({
  outbreak,
  country,
  changeCountryFilter,
  dataType,
  classes,
}) => {
  const countryOptions =
    outbreak === "Ebola Outbreak"
      ? ["All", ...ebolaOutbreakCountries]
      : ["All", ...allCountries];

  const onSelectCountry = (selectedValue) => {
    // If the selectedValue is not null, change the country in the filters Redux state.
    if (selectedValue) {
      changeCountryFilter(selectedValue);
    }
  };

  const borderColor =
    country === "All" && dataType === "projected deaths" ? "red" : "white";

  return (
    <>
      <StyledInputLabel>Location</StyledInputLabel>
      <Styled.StyledAutocomplete
        id="country-select"
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        onChange={(event, value) => onSelectCountry(value)}
        options={countryOptions}
        value={country}
        classes={classes}
        bordercolor={borderColor}
        disableClearable
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  outbreak: state.filters.outbreak,
  country: state.filters.country,
  dataType: state.filters.dataType,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeCountryFilter,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
