import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  ebolaOutbreakCountries,
  allCountries,
} from "../../constants/Countries";
import { changeCountryFilter } from "../../actions/filters";

const CountrySelect = ({ outbreak, country, changeCountryFilter }) => {
  const countryOptions =
    outbreak === "Ebola Outbreak"
      ? ["All", ...ebolaOutbreakCountries]
      : ["All", ...allCountries];

  const onSelectCountry = (selectedValue) => {
    if (selectedValue) {
      changeCountryFilter(selectedValue);
    }
  };

  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
      onChange={(event, value) => onSelectCountry(value)}
      options={countryOptions}
      value={country}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
