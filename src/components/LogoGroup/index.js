import React from "react";
import { ContentWrapper } from "./styles";

const LogoGroup = () => {
  return (
    <ContentWrapper>
      <img
        src="/images/logos/sussex.svg"
        alt="University of Sussex Logo"
        height="50px"
      />
      <img
        src="/images/logos/healthsites.png"
        alt="healthsites.io Logo"
        height="40px"
      />
      <img src="/images/logos/promed.svg" alt="ProMED Logo" height="32px" />
      <img
        src="/images/logos/imperial.png"
        alt="Imperial College London Logo"
        height="32px"
      />
      <img
        src="/images/logos/healthmap.svg"
        alt="HealthMap Logo"
        height="26px"
      />
    </ContentWrapper>
  );
};

export default LogoGroup;
