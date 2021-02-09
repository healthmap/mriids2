import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeChartType } from "../../actions/filters";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const DataRadioButtons = ({ chartType, changeChartType }) => {
  const handleChange = (event) => {
    changeChartType(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Data</FormLabel>
      <RadioGroup
        aria-label="data"
        name="data"
        value={chartType}
        onChange={handleChange}
      >
        <FormControlLabel value="cases" control={<Radio />} label="Cases" />
        <FormControlLabel value="deaths" control={<Radio />} label="Deaths" />
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  chartType: state.filters.chartType,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeChartType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataRadioButtons);
