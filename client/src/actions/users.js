export const UPDATE_MEMBERS = 'UPDATE_MEMBERS';
export const UPDATE_EXEC = 'UPDATE_EXEC';
export const SET_EXEC_LOADING = 'SET_EXEC_LOADING';
export const SET_MEMBERS_LOADING = 'SET_MEMBERS_LOADING';

export const updateMembers = members => {
  return {
    type: UPDATE_MEMBERS,
    payload: members
  };
};

export const updateExec = members => {
  return {
    type: UPDATE_EXEC,
    payload: members
  };
};

export const setExecLoading = loadingState => {
  return {
    type: SET_EXEC_LOADING,
    payload: loadingState
  };
};

export const setMembersLoading = loadingState => {
  return {
    type: SET_MEMBERS_LOADING,
    payload: loadingState
  };
};