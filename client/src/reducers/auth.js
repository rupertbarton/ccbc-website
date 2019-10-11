import * as actions from '../actions/auth';

const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actions.UPDATE_CURRENT_USER:
    return {
      ...state,
      currentUser: action.payload
    };

  default:
    return state;
  }
};