import React from "react";
import { CaseCountToggleWrapper } from "../styled-components/CaseCountToggle";
import SvgIcon from "../SvgIcon";

const CaseCountToggle = ({ showCaseCount, toggleCaseCountFunction }) => {
  const icon = showCaseCount ? "Hide" : "Show";
  return (
    <CaseCountToggleWrapper onClick={() => toggleCaseCountFunction()}>
      <SvgIcon icon={icon} size="20" title={`${icon} Count`} />
      <label>{`${icon} Count`}</label>
    </CaseCountToggleWrapper>
  );
};

export default CaseCountToggle;
