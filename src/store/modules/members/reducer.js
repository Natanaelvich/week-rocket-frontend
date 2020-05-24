import produce from 'immer';

const initialState = {
  data: [],
  membersModalOpen: false,
};

export default (state = initialState, { type, members, member }) => {
  switch (type) {
    case '@members/GET_MEMBERS_SUCCESS':
      return produce(state, draft => {
        draft.data = [...members];
      });

    case '@members/CREATE_MEMBER_REQUEST':
      return produce(state, draft => {
        draft.data.push(member);
      });

    case '@teams/OPEN_MEMBERS_MODAL':
      return produce(state, draft => {
        draft.membersModalOpen = true;
      });

    case '@teams/CLOSE_MEMBERS_MODAL':
      return produce(state, draft => {
        draft.membersModalOpen = false;
      });

    default:
      return state;
  }
};
