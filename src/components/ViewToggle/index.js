import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeViewFilter } from "../../actions/filters";
import ToggleButton from "../ToggleButton";
import { MapToggleWrapper } from "../styled-components/MapToggleWrapper";

const ViewToggle = (props) => {
  const currentView = props.view;
  const toggleFunction = props.changeViewFilter;
  return (
    <MapToggleWrapper>
      <ToggleButton
        value="snapshot"
        label="Snapshot"
        status={currentView}
        onClickFunction={toggleFunction}
      />
      <ToggleButton
        value="risk"
        label="Risk"
        status={currentView}
        onClickFunction={toggleFunction}
      />
    </MapToggleWrapper>
  );
};

const mapStateToProps = (state) => ({
  view: state.filters.view,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeViewFilter,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ViewToggle);
