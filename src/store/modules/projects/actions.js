export const getProjectsRequest = () => ({
  type: '@projects/GET_PROJECTS_REQUEST',
});

export const getProjectsSuccess = projects => ({
  type: '@projects/GET_PROJECTS_SUCCESS',
  projects,
});

export const createProjectsRequest = titleProject => ({
  type: '@projects/CREATE_PROJECTS_REQUEST',
  titleProject,
});

export const createProjectsSuccess = project => ({
  type: '@projects/CREATE_PROJECTS_SUCCESS',
  project,
});

export const openProjectModal = () => ({
  type: '@teams/OPEN_PROJECT_MODAL',
});

export const closeProjectModal = () => ({
  type: '@teams/CLOSE_PROJECT_MODAL',
});
