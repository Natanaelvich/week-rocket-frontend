export const getTeamsRequest = () => ({
  type: '@teams/GET_TEAMS_REQUEST',
});

export const getTeamsSuccess = teams => ({
  type: '@teams/GET_TEAMS_SUCCESS',
  teams,
});
