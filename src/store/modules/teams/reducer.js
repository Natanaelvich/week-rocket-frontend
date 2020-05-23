import produce from 'immer';

const initialState = {
  data: [],
  teamModalOpen: false,
  active: JSON.parse(localStorage.getItem('@week:team')) || null,
};

export default (state = initialState, { type, teams, team }) => {
  switch (type) {
    case '@teams/GET_TEAMS_SUCCESS':
      return produce(state, draft => {
        draft.data = [...teams];
      });

    case '@teams/CREATE_TEAM_SUCCESS':
      return produce(state, draft => {
        draft.data.push(team);
      });

    case '@teams/SELECT_TEAM':
      localStorage.setItem('@week:team', JSON.stringify(team));
      return produce(state, draft => {
        draft.active = team;
      });

    case '@teams/OPEN_TEAM_MODAL':
      return produce(state, draft => {
        draft.teamModalOpen = true;
      });

    case '@teams/CLOSE_TEAM_MODAL':
      return produce(state, draft => {
        draft.teamModalOpen = false;
      });

    default:
      return state;
  }
};
