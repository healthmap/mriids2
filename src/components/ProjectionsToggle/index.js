import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeProjectionFilter } from "../../actions/filters";
import { OnOffSwitch } from "../styled-components/OnOffSwitch";
import { ProjectionToggleWrapper } from "../styled-components/ProjectionToggleWrapper";

const ProjectionsToggle = ({ projection, changeProjectionFilter }) => {
  return (
    <ProjectionToggleWrapper className={projection ? "is-active" : null}>
      Projection
      <OnOffSwitch>
        <input
          onChange={() => changeProjectionFilter()}
          type="checkbox"
          name="projection"
          id="projection-switch"
        />
        <label htmlFor="projection-switch">
          <span className="onoffswitch-inner" />
          <span className="onoffswitch-switch" />
        </label>
      </OnOffSwitch>
    </ProjectionToggleWrapper>
  );
};

const mapStateToProps = (state) => ({
  projection: state.filters.projection,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeProjectionFilter,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsToggle);
