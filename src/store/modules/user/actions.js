export const signInRequest = (email, password) => ({
  type: '@user/SIGN_IN_REQUEST',
  payload: { email, password },
});

export const signInSuccess = token => ({
  type: '@user/SIGN_IN_SUCCESS',
  token,
});

export const signUpRequest = (name, email, password) => ({
  type: '@user/SIGN_UP_REQUEST',
  payload: { name, email, password },
});

export const signUpSuccess = token => ({
  type: '@user/SIGN_UP_SUCCESS',
  token,
});

export const getPermissionsRequest = () => ({
  type: '@user/GET_PERMISSIONS_REQUEST',
});

export const getPermissionsSuccess = (roles, permissions) => ({
  type: '@user/GET_PERMISSIONS_SUCCESS',
  rolesPermissions: { roles, permissions },
});

export const signOutRequest = () => ({
  type: '@user/SIGN_OUT_REQUEST',
});
