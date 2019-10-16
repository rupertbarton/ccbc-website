import * as actions from '../actions/users';

const INITIAL_STATE = {
  members: [],
  execRoles: []
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

  default:
    return state;
  }
};