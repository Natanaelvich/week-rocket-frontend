import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamSwitcher from '~/components/TeamSwitcher';

import { Container } from './styles';
import { getTeamsRequest } from '~/store/modules/teams/actions';
import Projects from '~/components/Projects';
import { getPermissionsRequest } from '~/store/modules/user/actions';

function Main() {
  const dispatch = useDispatch();

  const teams = useSelector(state => state.teams);

  useEffect(() => {
    function getTeams() {
      dispatch(getTeamsRequest());
      dispatch(getPermissionsRequest());
    }

    getTeams();
  }, [dispatch]);

  return (
    <Container>
      <TeamSwitcher teams={teams} />
      <Projects />
    </Container>
  );
}

export default Main;
