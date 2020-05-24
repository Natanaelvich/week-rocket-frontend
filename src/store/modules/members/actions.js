export const getMembersRequest = () => ({
  type: '@members/GET_MEMBERS_REQUEST',
});

export const getMembersSuccess = members => ({
  type: '@members/GET_MEMBERS_SUCCESS',
  members,
});

export const updateMembersRequest = (id, roles) => ({
  type: '@members/UPDATE_MEMBERS_REQUEST',
  update: { id, roles },
});

export const updateMembersSuccess = members => ({
  type: '@members/UPDATE_MEMBERS_SUCCESS',
  members,
});

export const createMemberRequest = data => ({
  type: '@members/CREATE_MEMBER_REQUEST',
  data,
});

export const createMemberSuccess = member => ({
  type: '@members/CREATE_MEMBER_SUCCESS',
  member,
});

export const openMembersModal = () => ({
  type: '@teams/OPEN_MEMBERS_MODAL',
});

export const closeMembersModal = () => ({
  type: '@teams/CLOSE_MEMBERS_MODAL',
});
