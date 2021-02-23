import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import { InputLabel } from "../styled-components/InputLabel";
import {
  ebolaOutbreakCountries,
  allCountries,
} from "../../constants/Countries";
import { changeCountryFilter } from "../../actions/filters";
import * as Styled from "./styles";

const CountrySelect = ({ outbreak, country, changeCountryFilter, classes }) => {
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

  return (
    <>
      <InputLabel>Location</InputLabel>
      <Styled.StyledAutocomplete
        id="country-select"
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        onChange={(event, value) => onSelectCountry(value)}
        options={countryOptions}
        value={country}
        classes={classes}
        disableClearable
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  outbreak: state.filters.outbreak,
  country: state.filters.country,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeCountryFilter,
    },
    dispatch
  );

// The withStyles higher-order component takes in the 'styles' and makes them accessible via the 'classes' prop.
export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
