import React from "react";
import {
  FirstPageContainer,
  ContentWrapper,
  BodyLarge,
  Title,
  SecondPageContainer,
  TeamMemberWrapper,
} from "./styles";
import TeamMember from "../../components/TeamMember";
import LogoGroup from "../../components/LogoGroup";

const Team = () => (
  <>
    <FirstPageContainer>
      <ContentWrapper>
        <Title>Team</Title>
        <BodyLarge>
          The MRIIDS project is a collaboration between team members from The
          International Society for Infectious Diseases (ISID), ProMED, the
          Medical Research Council (MRC) Centre for Outbreak Analysis and
          Modeling at Imperial College London, the University of Sussex (UK),
          HealthMap at Boston Children’s Hospital/Harvard Medical School, and
          healthsites.io.
        </BodyLarge>
      </ContentWrapper>
    </FirstPageContainer>
    <SecondPageContainer>
      <ContentWrapper>
        <TeamMemberWrapper>
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
        </TeamMemberWrapper>
      </ContentWrapper>
    </SecondPageContainer>
    <LogoGroup />
  </>
);

export default Team;
