import React from "react";
import { CaseCountToggleWrapper } from "../styled-components/CaseCountToggle";
import SvgIcon from "../SvgIcon";

const CaseCountToggle = ({ showCount }) => {
  const icon = showCount ? "Hide" : "Show";
  return (
    <CaseCountToggleWrapper
      onClick={() => console.log("THIS IS GETTING CLICKED")}
    >
      <SvgIcon icon={icon} size="20" title={`${icon} Count`} />
      <label>{`${icon} Count`}</label>
    </CaseCountToggleWrapper>
  );
};

export default CaseCountToggle;
