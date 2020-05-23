import React from 'react';

import { Container, Team, TeamList } from './styles';

function TeamSwitcher() {
  return (
    <Container>
      <TeamList>
        <Team>
          <img
            alt="Rocket"
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=Rocket"
          />
        </Team>
        <Team>
          <img
            alt="Rocket"
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=Rocket"
          />
        </Team>
        <Team>
          <img
            alt="Rocket"
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=Rocket"
          />
        </Team>
      </TeamList>
    </Container>
  );
}

export default TeamSwitcher;
