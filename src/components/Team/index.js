import React, { Component } from "react";
import * as Styled from "../../components/styled-components/Team";
import TeamMember from "../../components/TeamMember";
const Team = () => {
  return (
    <>
      <Styled.FirstPageContainer>
        <Styled.Title>Team</Styled.Title>
        <Styled.BodyText>
          The MRIIDS project is a collaboration between team members from The
          International Society for Infectious Diseases (ISID), ProMED, the
          Medical Research Council (MRC) Centre for Outbreak Analysis and
          Modeling at Imperial College London, the University of Sussex (UK),
          HealthMap at Boston Children’s Hospital/Harvard Medical School, and
          healthsites.io.
        </Styled.BodyText>
      </Styled.FirstPageContainer>
      <Styled.SecondPageContainer>
        <Styled.TeamMemberWrapper>
          <TeamMember content="sangeeta" />
          <TeamMember content="anne" />
          <TeamMember content="pierre" />
          <TeamMember content="emily" />
          <TeamMember content="kara" />
          <TeamMember content="john" />
          <TeamMember content="clark" />
          <TeamMember content="jared" />
          <TeamMember content="moritz" />
          <TeamMember content="britta" />
          <TeamMember content="angel" />
          <TeamMember content="lawrence" />
          <TeamMember content="johnr" />
          <TeamMember content="mark" />
        </Styled.TeamMemberWrapper>
      </Styled.SecondPageContainer>
    </>
  );
};

export default Team;
