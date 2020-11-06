import React, { Component } from "react";
import * as Styled from "../../components/styled-components/Team";
import TeamMember from "../../components/TeamMember";
class Team extends Component {
  render() {
    return (
      <Styled.PageContainer>
        <Styled.Title>Team</Styled.Title>
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
      </Styled.PageContainer>
    );
  }
}

export default Team;
