import * as actions from '../actions/users';

const INITIAL_STATE = {
  members: [],
  execRoles: [],
  isExecLoading: false,
  isMembersLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actions.UPDATE_MEMBERS:
    return {
      ...state,
      members: action.payload
    };
  case actions.UPDATE_EXEC:
    return {
      ...state,
      execRoles: action.payload
    };
  case actions.SET_EXEC_LOADING:
    return {
      ...state,
      isExecLoading: action.payload
    };
  case actions.SET_MEMBERS_LOADING:
    return {
      ...state,
      isMembersLoading: action.payload
    };

  default:
    return state;
  }
};