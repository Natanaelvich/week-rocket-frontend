import React from 'react';
import PropsTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { Container, Team, TeamList, NewTeam } from './styles';
import {
  selectTeam,
  openTeamModal,
  closeTeamModal,
} from '~/store/modules/teams/actions';
import Modal from '../Modal';
import { Button } from '~/styles/components/Button';

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
        <NewTeam onClick={() => dispatch(openTeamModal())}>
          <MdAdd size={28} color="#fff" />
        </NewTeam>
      </TeamList>

      {teams.teamModalOpen && (
        <Modal>
          <h1>Criar Time</h1>

          <form>
            <span>Nome</span>
            <input type="text" name="newTeam" />

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
