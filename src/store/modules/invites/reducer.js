import produce from 'immer';

const initialState = {
  data: [],
};

export default (state = initialState, { type, invite }) => {
  switch (type) {
    case '@members/INVITE_MEMBERS_SUCCESS':
      return produce(state, draft => {
        draft.data = [...invite];
      });

    default:
      return state;
  }
};
