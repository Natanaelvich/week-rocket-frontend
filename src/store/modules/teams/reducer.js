import produce from 'immer';

const initialState = {
  data: [],
  active: JSON.parse(localStorage.getItem('@week:team')) || null,
};

export default (state = initialState, { type, teams, team }) => {
  switch (type) {
    case '@teams/GET_TEAMS_SUCCESS':
      return produce(state, draft => {
        draft.data.push(...teams);
      });

    case '@teams/SELECT_TEAM':
      localStorage.setItem('@week:team', JSON.stringify(team));
      return produce(state, draft => {
        draft.active = team;
      });

    default:
      return state;
  }
};
