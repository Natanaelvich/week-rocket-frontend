export const getTeamsRequest = () => ({
  type: '@teams/GET_TEAMS_REQUEST',
});

export const getTeamsSuccess = teams => ({
  type: '@teams/GET_TEAMS_SUCCESS',
  teams,
});

export const selectTeam = team => ({
  type: '@teams/SELECT_TEAM',
  team,
});
