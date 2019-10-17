import * as actions from '../actions/pages';

const INITIAL_STATE = {
  pages: {},
  isPagesLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.UPDATE_PAGES:
      console.log(action)
    return {
      ...state,
      pages: action.payload
    };
  case actions.SET_PAGES_LOADING:
    return {
      ...state,
      isPagesLoading: action.payload
    };

  default:
    return state;
  }
};