import produce from 'immer';

const initialState = {
  signedIn: !!localStorage.getItem('@week:token'),
  token: localStorage.getItem('@week:token') || null,
};

export default (state = initialState, { type, token }) => {
  switch (type) {
    case '@user/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.signedIn = true;
        draft.token = token;
      });

    default:
      return state;
  }
};
