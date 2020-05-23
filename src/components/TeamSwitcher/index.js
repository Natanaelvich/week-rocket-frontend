import React from 'react';

import { Container, Team, TeamList } from './styles';

function TeamSwitcher({ teams }) {
  return (
    <Container>
      <TeamList>
        {teams.map(team => (
          <Team key={team.id}>
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}

export default TeamSwitcher;
