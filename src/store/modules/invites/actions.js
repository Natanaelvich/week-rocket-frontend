export const inviteMembersRequest = invite => ({
  type: '@members/INVITE_MEMBERS_REQUEST',
  invite,
});

export const inviteMembersSuccess = invite => ({
  type: '@members/INVITE_MEMBERS_SUCCESS',
  invite,
});
