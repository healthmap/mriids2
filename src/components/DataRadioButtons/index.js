import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeChartType } from "../../actions/filters";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const DataRadioButtons = ({ chartType, changeChartType, outbreakSelected }) => {
  const handleChange = (event) => {
    changeChartType(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">DATA</FormLabel>
      <RadioGroup
        aria-label="data"
        name="data"
        value={chartType}
        onChange={handleChange}
      >
        <FormControlLabel value="cases" control={<Radio />} label="Cases" />
        {outbreakSelected === "COVID 19" ? (
          <>
            <FormControlLabel
              value="deaths"
              control={<Radio />}
              label="Deaths"
            />
            <FormControlLabel
              value="projected deaths"
              control={<Radio />}
              label="Projected Deaths"
            />
          </>
        ) : (
          <FormControlLabel
            value="projected cases"
            control={<Radio />}
            label="Projected Cases"
          />
        )}
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  chartType: state.filters.chartType,
  outbreakSelected: state.filters.outbreak,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeChartType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataRadioButtons);
