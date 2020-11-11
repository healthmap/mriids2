import React from "react";
import { connect } from "react-redux";
import ToggleButton from "../ToggleButton";
import { MapToggleWrapper } from "../styled-components/MapToggleWrapper";

const ViewToggle = (props) => {
  return (
    <MapToggleWrapper>
      <ToggleButton value="snapshot" label="Snapshot" status={props.view} />
      <ToggleButton value="risk" label="Risk" status={props.view} />
    </MapToggleWrapper>
  );
};

const mapStateToProps = (state) => ({
  view: state.filters.view,
});

export default connect(mapStateToProps)(ViewToggle);
