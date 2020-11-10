import React, { useState } from "react";
import TeamMemberContent from "./TeamMemberContent";
import * as Styled from "./styles.js";

const TeamMember = (props) => {
  const [textDisplay, setTextDisplay] = useState(false);

  const toggleButton = () => {
    setTextDisplay(!textDisplay);
  };

  const teamMemberDisplay = TeamMemberContent[props.content];

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
          <Styled.FullBio className={textDisplay ? "show-text" : null}>
            {teamMemberDisplay.body && <div>{paragraphs}</div>}
          </Styled.FullBio>
        </Styled.Test>
      </Styled.TeamMemberTextWrapper>
      <Styled.ToggleButton
        onClick={() => toggleButton()}
        className={textDisplay ? "ide" : null}
      >
        {!textDisplay ? (
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
};

export default TeamMember;
