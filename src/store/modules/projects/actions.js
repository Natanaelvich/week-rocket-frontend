export const getProjectsRequest = () => ({
  type: '@projects/GET_PROJECTS_REQUEST',
});

export const getProjectsSuccess = projects => ({
  type: '@projects/GET_PROJECTS_SUCCESS',
  projects,
});
