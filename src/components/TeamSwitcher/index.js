import React from 'react';
import PropsTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Container, Team, TeamList } from './styles';
import { selectTeam } from '~/store/modules/teams/actions';

function TeamSwitcher({ teams }) {
  const dispatch = useDispatch();

  function handleSelectTeam(team) {
    dispatch(selectTeam(team));
  }
  return (
    <Container>
      <TeamList>
        {teams.data.map(team => (
          <Team key={team.id} onClick={() => handleSelectTeam(team)}>
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

TeamSwitcher.propTypes = {
  teams: PropsTypes.shape({
    map: PropsTypes.func,
    data: PropsTypes.arrayOf(
      PropsTypes.shape({
        id: PropsTypes.number,
        name: PropsTypes.string,
      })
    ),
  }).isRequired,
};

export default TeamSwitcher;
