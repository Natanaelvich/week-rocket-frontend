import produce from 'immer';

const initialState = {
  data: [],
  projectModalOpen: false,
};

export default (
  state = initialState,
  { type, projects, project }
) => {
  switch (type) {
    case '@projects/GET_PROJECTS_SUCCESS':
      return produce(state, draft => {
        draft.data = projects;
      });

    case '@projects/CREATE_PROJECTS_SUCCESS':
      return produce(state, draft => {
        draft.data.push(project);
      });

    case '@teams/OPEN_PROJECT_MODAL':
      return produce(state, draft => {
        draft.projectModalOpen = true;
      });

    case '@teams/CLOSE_PROJECT_MODAL':
      return produce(state, draft => {
        draft.projectModalOpen = false;
      });
    default:
      return state;
  }
};
