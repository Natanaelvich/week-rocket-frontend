import produce from 'immer';

const initialState = [];

export default (state = initialState, { type, teams }) => {
  switch (type) {
    case '@teams/GET_TEAMS_SUCCESS':
      return produce(state, draft => {
        draft.push(...teams);
      });

    default:
      return state;
  }
};
