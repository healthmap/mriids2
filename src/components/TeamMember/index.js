import React, { Component } from "react";
import TeamMemberContent from "./TeamMemberContent";
import * as Styled from "./styles.js";

class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textDisplay: false,
    };
  }

  ToggleButton() {
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay,
    }));
  }

  ShowButton() {
    this.setState({
      textDisplay: true,
    });
  }

  HideButton() {
    this.setState({
      textDisplay: false,
    });
  }

  render() {
    let teamMemberDisplay = TeamMemberContent[this.props.content];

    const paragraphs = teamMemberDisplay.body.map((paragraph, i) => (
      <Styled.Body key={i}>{paragraph}</Styled.Body>
    ));

    return (
      <Styled.TeamMemberContentWrapper>
        {teamMemberDisplay.image && (
          <Styled.Image src={teamMemberDisplay.image} />
        )}
        <Styled.TeamMemberTextWrapper>
          {teamMemberDisplay.name && (
            <Styled.Title>{teamMemberDisplay.name}</Styled.Title>
          )}
          {teamMemberDisplay.org && (
            <Styled.SubTitle>{teamMemberDisplay.org}</Styled.SubTitle>
          )}
          {teamMemberDisplay.intro && (
            <Styled.Body>{teamMemberDisplay.intro}</Styled.Body>
          )}
          <Styled.Test>
            <Styled.FullBio
              className={this.state.textDisplay ? "show-text" : null}
            >
              {teamMemberDisplay.body && <div>{paragraphs}</div>}
            </Styled.FullBio>
          </Styled.Test>
        </Styled.TeamMemberTextWrapper>
        <Styled.ToggleButton
          onClick={() => this.ToggleButton()}
          className={this.state.textDisplay ? "ide" : null}
        >
          {!this.state.textDisplay ? (
            <>
              Full Bio <img src="icons/chevron-circle-down-light.svg" />
            </>
          ) : (
            <>
              Full Bio <img src="icons/chevron-circle-up-light.svg" />
            </>
          )}
        </Styled.ToggleButton>
      </Styled.TeamMemberContentWrapper>
    );
  }
}

export default TeamMember;
