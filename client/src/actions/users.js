export const UPDATE_MEMBERS = 'UPDATE_MEMBERS';

export const updateMembers = members => {
  return {
    type: UPDATE_MEMBERS,
    payload: members
  };
};
export const UPDATE_EXEC = 'UPDATE_EXEC';

export const updateExec = members => {
  return {
    type: UPDATE_EXEC,
    payload: members
  };
};