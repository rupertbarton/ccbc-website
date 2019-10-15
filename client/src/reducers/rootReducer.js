import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';

const allReducers = combineReducers({
  auth,
  users
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;