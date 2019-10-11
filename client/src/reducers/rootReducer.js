import { combineReducers } from 'redux';
import auth from './auth';

const allReducers = combineReducers({
  auth
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;