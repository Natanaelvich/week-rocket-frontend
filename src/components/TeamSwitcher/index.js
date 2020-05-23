import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { MdAdd, MdPowerSettingsNew } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { Container, Team, TeamList, NewTeam, Logout } from './styles';
import {
  selectTeam,
  openTeamModal,
  closeTeamModal,
  createTeamRequest,
} from '~/store/modules/teams/actions';
import Modal from '../Modal';
import { Button } from '~/styles/components/Button';
import { signOutRequest } from '~/store/modules/user/actions';

function TeamSwitcher({ teams }) {
  const dispatch = useDispatch();

  const [nameTeam, setNameTeam] = useState('');

  function handleSelectTeam(team) {
    dispatch(selectTeam(team));
  }

  function handleCreateTeam(e) {
    e.preventDefault();

    dispatch(createTeamRequest(nameTeam));
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
        <NewTeam onClick={() => dispatch(openTeamModal())}>
          <MdAdd size={28} color="#fff" />
        </NewTeam>
      </TeamList>

      <Logout onClick={() => dispatch(signOutRequest())}>
        <MdPowerSettingsNew size={28} color="#fff" />
      </Logout>

      {teams.teamModalOpen && (
        <Modal>
          <h1>Criar Time</h1>

          <form onSubmit={handleCreateTeam}>
            <span>Nome</span>
            <input
              value={nameTeam}
              onChange={text => setNameTeam(text.target.value)}
              type="text"
              name="newTeam"
            />

            <Button size="big" type="submit">
              Salvar
            </Button>

            <Button
              onClick={() => dispatch(closeTeamModal())}
              size="small"
              color="gray"
            >
              Cancelar
            </Button>
          </form>
        </Modal>
      )}
    </Container>
  );
}

TeamSwitcher.propTypes = {
  teams: PropsTypes.shape({
    map: PropsTypes.func,
    teamModalOpen: PropsTypes.bool,
    data: PropsTypes.arrayOf(
      PropsTypes.shape({
        id: PropsTypes.number,
        name: PropsTypes.string,
      })
    ),
  }).isRequired,
};

export default TeamSwitcher;
