import produce from 'immer';

const initialState = {
  data: [],
};

export default (state = initialState, { type, projects }) => {
  switch (type) {
    case '@projects/GET_PROJECTS_SUCCESS':
      return produce(state, draft => {
        draft.data = projects;
      });

    default:
      return state;
  }
};
