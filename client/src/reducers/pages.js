import * as actions from '../actions/pages';

const INITIAL_STATE = {
  pages: {},
  isPagesLoading: false,
  pageToEdit: 'Home'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actions.UPDATE_PAGE:
    return {
      ...state,
      pages: {
        ...state.pages,
        ...action.payload
      }
    };
  case actions.UPDATE_PAGES:
    return {
      ...state,
      pages: action.payload
    };
  case actions.SET_PAGES_LOADING:
    return {
      ...state,
      isPagesLoading: action.payload
    };
  case actions.UPDATE_PAGE_TO_EDIT:
    return {
      ...state,
      pageToEdit: action.payload
    };

  default:
    return state;
  }
};