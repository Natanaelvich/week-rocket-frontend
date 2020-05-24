import produce from 'immer';
import history from '~/services/services';

const initialState = {
  signedIn: !!localStorage.getItem('@week:token'),
  token: localStorage.getItem('@week:token') || null,
  permissions: [],
  roles: [],
};

export default (
  state = initialState,
  { type, token, rolesPermissions }
) => {
  switch (type) {
    case '@user/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.signedIn = true;
        draft.token = token;
      });

    case '@user/SIGN_UP_SUCCESS':
      return produce(state, draft => {
        draft.signedIn = true;
        draft.token = token;
      });

    case '@user/GET_PERMISSIONS_SUCCESS':
      return produce(state, draft => {
        const { roles, permissions } = rolesPermissions;
        draft.permissions = permissions;
        draft.roles = roles;
      });

    case '@user/SIGN_OUT_REQUEST':
      localStorage.clear();
      history.push('signin');
      return produce(state, draft => {
        draft.signedIn = false;
        draft.token = null;
      });

    default:
      return state;
  }
};
